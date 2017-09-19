class App {
  constructor() {
    this.lists = []
    this.initializeEventListeners() //grab DOM elements and attach event listeners
    this.render()
  }

  initializeEventListeners() {
    //new list form and input field
    this.createListForm = document.getElementById("create-list-form")
    this.newListTitle = document.getElementById("new-list-title")
    //new task form and input fields
    this.createTaskForm = document.getElementById("create-task-form")
    this.parentListDropdown = document.getElementById("parent-list") //dropdown select
    this.newTaskDescription = document.getElementById("new-task-description")
    this.newTaskPriority = document.getElementById("new-task-priority")
    this.listsSection = document.getElementById("lists")//section of page where lists will be rendered to

    //attach event listeners
    this.createListForm.addEventListener("submit", this.createNewList)
    this.createTaskForm.addEventListener("submit", this.createNewTask)
    this.listsSection.addEventListener("click", this.deleteList)
  }

  createNewList() {}

  createNewTask() {}

  deleteList() {}

  render() {
    this.lists.length === 0 ? this.createTaskForm.style.display = "none" : this.createTaskForm.style.display = "block"
  }

}
