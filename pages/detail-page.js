// add event handler
function submitComment() {
  // gather data
  const inputField = document.getElementById("name");
  const name = inputField.value;
  const textArea = document.getElementById("msg");
  const msg = textArea.value;
  // create the elements you need
  const comment = document.createElement("section");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  // adjust the elements we created
  h3.innerHTML = `${name} said:`;
  p.innerHTML = msg;
  comment.classList.add("comment");
  comment.appendChild(h3);
  comment.appendChild(p);
  // display the elements on the page
  const commentSection = document.getElementById("comments");
  commentSection.appendChild(comment);
  // reset form values
  
  if (doesNotPassAllValidations(name, msg)){
    return null;
  }

  inputField.value = null;
  textArea.value = null;
}

function doesNotPassAllValidations(name,msg){
  if (!name || !msg){
    alert('You forgot to fill in your name or message!')
    return true;
  }

  if (msg>280){
    alert('Your comment is too long')
    return true;
  }
  return false;
}
  
