class App {
  constructor() {
    this.lists = []
    this.initializeEventListeners() //grab DOM elements and attach event listeners
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
    this.createListForm.addEventListener("submit", this.createNewList.bind(this))
    this.createTaskForm.addEventListener("submit", this.createNewTask.bind(this))
    this.listsSection.addEventListener("click", this.deleteList.bind(this))
    // bind `this` so it refers to app class instance instead of the HTML element listening for event; could also be solved with arrow fn: this.createListForm.addEventListener("submit", () => this.createNewList()) where the => fn binds for us NOTE that we have to CALL this.createNewList() in the arrow fn
  }

  createNewList() {
    event.preventDefault() //event implicitly passed to handler by listener
    const newList = new List(this.newListTitle.value)
    this.lists.push(newList)
    event.target.reset()
    this.render()
  }

  createNewTask() {
    event.preventDefault()
    const parentId = this.parentListDropdown.options[this.parentListDropdown.selectedIndex].dataset.id //we can find the selected option then grab the id stored as a dataset
    const parentList = this.lists.find(list => list.id == parentId) //because parentId is a string, we can utilize JS == type coersion to compare int to string
    const newTask = new Task(this.newTaskDescription.value, this.newTaskPriority.value) //create a new Task instance
    parentList.tasks.push(newTask) //.push() that onto the correct list

    event.target.reset() //clear the form inputs
    this.render() //re-render the app
  }

  deleteList() {
    if (event.target.className === "delete-list") {
      const listId = parseInt(event.target.dataset.id)
      this.lists = this.lists.filter(list => list.id !== listId) //remove that list from this.lists
    }
    this.render() //update the page to reflect the changes made in memory
  }

  render() {
    this.lists.length === 0 ? this.createTaskForm.style.display = "none" : this.createTaskForm.style.display = "block" //hide the new task form if there are no lists to associate it with

    let listHTML = []
    let dropdownHTML = []

    this.lists.forEach(list => {
      listHTML.push(list.render())
      dropdownHTML.push(`<option data-id="${list.id}">${list.title}</option>`)
    })

    this.parentListDropdown.innerHTML = dropdownHTML.join("")
    this.listsSection.innerHTML = listHTML.join("")
    console.log(this)
  }

}
