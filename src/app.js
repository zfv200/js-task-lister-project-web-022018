const listDiv = document.getElementById("app-content");
newList();

//get new list form to display or create a new option on current form
function taskList(parent, listTitle) {
  let taskForm = document.getElementById("create-task-form")
  let optionSelect = document.getElementById("parent-list")
  if (taskForm === null) {
    const newList = document.createElement("div")
    newList.className = "task-form"
    let innerString = `<div id="list-body"><form id="create-task-form"> <label for="parent-list">Select List:</label> <select id="parent-list"><option value="${listTitle}" selected> ${listTitle} </option> </select> <label for="new-task-description">Task description:</label> <input required type="text" id="new-task-description" placeholder="description"> <label for="new-task-priority">Priority level:</label> <input type="text" id="new-task-priority" placeholder="priority"> <input id="create-task" type="submit" value="Create New Task"> </form></div>`
    newList.innerHTML = innerString;
    parent.appendChild(newList)
    //add event listener to new task submit button
    createNewTask();
  } else {
    let option = document.createElement("option")
    option.value = listTitle
    option.innerText = listTitle
    optionSelect.appendChild(option)
  }
}

//display a new list body
function listDisplay(parent, title) {
  const tasks = document.createElement("div")
  tasks.setAttribute("class", "lists")
  let innerString = `<div> <h5>${title} <button data-title=${title} class="delete-list">X</button><h5><ul id="listItems"></ul></div>`
  tasks.innerHTML = innerString
  parent.appendChild(tasks)
}

function newListCallBack(event) {
  let title = document.getElementById("new-list-title").value
  let myNewList = new List(title)
  //prevent duplicate lists
  if (Array.prototype.slice.call(document.getElementsByTagName('option')).find(option=>option.value===title)!==undefined ){
    alert("you already have a list with that name!");
    event.preventDefault();
    return;
  }

  taskList(listDiv, title)
  listDisplay(listDiv, title)
  //change selected option:
  let arr = Array.prototype.slice.call(document.getElementsByTagName('option'))
  arr.find(option=>option.value===title).selected=true
  deleteButtons();
  event.preventDefault();
}

function newList(){
  let listSubmit = document.getElementById("list-submit")
  listSubmit.addEventListener('click', newListCallBack)
  deleteButtons();
}

function newTaskCallBack(event) {
  //get correct list
  let lists = document.getElementsByClassName('lists')
  let arr = Array.prototype.slice.call(lists)
  let options = Array.prototype.slice.call(document.getElementsByTagName("option"))
  let optionValue = options.find(option=>option.selected===true).value
  let targetList = arr.find(el => el.children[0].innerText.includes(`${optionValue}`))
  let taskUl = targetList.getElementsByTagName("ul")[0]
  //grab values from form
  let description = document.getElementById('new-task-description').value
  let priority = document.getElementById('new-task-priority').value
  if (priority === "") {
    priority = "low"
  }
  let li = document.createElement("li")
  li.innerHTML = `Task: ${description}<button data-title=${description} class="delete-task">X</button><br>Priority: ${priority}`
  taskUl.appendChild(li)
  deleteButtons();
  event.preventDefault();

  // let taskUl = document.getElementById("listItems")
  // let description = document.getElementById('new-task-description').value
  // let priority = document.getElementById('new-task-priority').value
  // if (priority === "") {
  //   priority = "low"
  // }
  // let li = document.createElement("li")
  // // li.innerText = description
  // li.innerHTML = `Task: ${description}<button data-title=${description} class="delete-list">X</button><br>Priority: ${priority}`
  // taskUl.appendChild(li)
  // event.preventDefault();
}

function createNewTask() {
  let taskButton = document.getElementById("create-task")
  taskButton.addEventListener('click', newTaskCallBack)
}

//event handler for delete button clicks
function deleteButtonCallback(event) {
  if (event.currentTarget.getAttribute('class') === "delete-list") {
    let options = document.querySelectorAll('option')
    let optionsArr = Array.prototype.slice.call(options)
    let listsArr = Array.prototype.slice.call(document.querySelectorAll('.lists'))
    let targetText = event.currentTarget.getAttribute("data-title")
    //remove option and target list display
      if (document.getElementsByTagName('option').length===1) {
          document.getElementById('create-task-form').remove()
      }
    optionsArr.find(option=>option.value.includes(targetText)).remove();
    listsArr.find(list=>list.getElementsByTagName('h5')[0].innerHTML.includes(targetText)).remove()
  } else {
    event.currentTarget.parentElement.remove()
  }
}

//add click event listeners to all delete buttons
function deleteButtons() {
  let buttons = document.getElementsByTagName("button")
  let arr = Array.prototype.slice.call(buttons)
  for (let i=0;i<arr.length;i++){
    arr[i].addEventListener('click', deleteButtonCallback)
  }
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
