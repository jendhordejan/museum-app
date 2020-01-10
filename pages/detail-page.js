//Javascript to run the detail-page.js and show the comments submitted
//by the user.

<script src="detail-page.js"></script>

function submitComment(){
  //extract the Name of the user and store it to the variable inputField.
  const inputField = document.getElementById("name")
  //assigning the value of inputField to the variable name.
  const name = inputField.nodeValue

  //extract the comment of the user and store it to the variable textArea.
  const textArea = document.getElementById("msg")
  //assigning the value of textArea to the variable 'msg'.
  const msg = textArea.nodeValue

  //create a new <section> Element and store it in the variable comment.
  const comment = document.createElement('section')

  //create a new <h3> Element and store it in the variable h3.
  const h3 = document.createElement("h3")

  //create a new <p> Element and store it in the variable p.
  const p = document.createElement("p")

  //reassign the values of variables comment, h3, and p to their innerHTML property.
  p3.innerHTML = `${name} said:`
  h3.innerHTML = msg
  comment.classList.add('comment')
  comment.appendChild(h3)
  comment.appendChild(p)
  console.log('comment')
}