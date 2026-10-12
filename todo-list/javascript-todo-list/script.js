const listContainer = document.getElementById("list-container")
const addTaskBtn = document.getElementById('btn')
const inputBox = document.getElementById('input-box')
const errorMessage = document.getElementById('tooltip')


addTaskBtn.addEventListener('click', () => {

   if (inputBox.value === '') {
      // alert("You must write something!");
      errorMessage.classList.remove('inactive')

   } else {
      errorMessage.classList.add('inactive')
      let li = document.createElement("li")
      li.innerHTML = inputBox.value
      listContainer.appendChild(li)

      let span = document.createElement("span")
      span.innerHTML = "\u00d7"
      li.appendChild(span);
   }

   inputBox.value = "";
   saveData()


})


listContainer.addEventListener('click', function (e) {
   if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
   } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();

   }
}, false);



function saveData() {
   localStorage.setItem("data", listContainer.innerHTML)
}

function showTask() {
   listContainer.innerHTML = localStorage.getItem("data")
}

showTask()

// inputBox.addEventListener('click', function addTask() {

//    if (inputBox.value === '') {
//       alert("You must write something!");

//    } else {
//       let li = document.createElement("li")
//       li.innerHTML = inputBox;
//       listContainer.appendChild(li)
//    }

// })

