const listDiv = document.getElementById("main-content");
newList();

function taskList(parent, listTitle) {
  let taskForm = document.getElementById("create-task-form")
  let optionSelect = document.getElementById("parent-list")
  if (taskForm === null) {
    const newList = document.createElement("div")
    newList.className = "task-form"
    let innerString = `<form id="create-task-form"> <label for="parent-list">Select List:</label> <select id="parent-list"><option value="${listTitle}" selected> ${listTitle} </option> </select> <label for="new-task-description">Task description:</label> <input required type="text" id="new-task-description" placeholder="description"> <label for="new-task-priority">Priority level:</label> <input type="text" id="new-task-priority" placeholder="priority"> <input type="submit" value="Create New Task"> </form>`
    newList.innerHTML = innerString;
    parent.appendChild(newList)
  } else {
    let option = document.createElement("option")
    option.value = listTitle
    option.innerText = listTitle
    optionSelect.appendChild(option)
  }
}

function listDisplay(parent, title) {
  const tasks = document.createElement("div")
  let innerString = `<div> <ul id="lists"></ul><h2>${title} <button data-title=${title} class="delete-list">X</button><h2></div>`
  tasks.innerHTML = innerString
  parent.appendChild(tasks)
}

function newListCallBack(event) {
  let title = document.getElementById("new-list-title").value
  let myNewList = new List(title)

  taskList(listDiv, title)
  listDisplay(listDiv, title)
  event.preventDefault();
}

function newList(){
  let listSubmit = document.getElementById("list-submit")
  listSubmit.addEventListener('click', newListCallBack)
}


// function newListCallBack(event) {
//   console.log("step 1")
//   let title = document.getElementById("new-list-title").value
//   if (title!=="") {
//       if (listDiv.style.display==="none") {
//         listDiv.style.display = "block";
//       }
//
//       //create stuff here
//       //refactor this into listInstantiation()
//       let myNewList = new List(title)
//       let pl = document.getElementById('parent-list')
//       pl.children[0].innerHTML = myNewList.title
//       const tasks = document.createElement("div")
//       let innerString = `<div> <ul id="lists"></ul><h2>${title} <button data-title=${title} class="delete-list">X</button><h2></div>`
//       tasks.innerHTML = innerString
//       parent.appendChild(tasks)
//     }
//   event.preventDefault();
// }

// function listInstantiation() {
//   let myNewList = new List(title)
//   let pl = document.getElementById('parent-list')
//   pl.children[0].innerHTML = myNewList.title
// }
