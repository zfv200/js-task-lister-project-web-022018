/*
list is responsible for creating a single list component
*/

class List {
  constructor(id, title) {
    if (!id || !title) { throw new Error("New list title field cannot be empty") }
    this.id = id
    this.title = title
    this.tasks = []
    this.taskIds = 0 //keep track of every task via an id
  }

  render() {
    return (`
        <div class="list">
          <h2><button data-id="${this.id}" class="delete-list">X</button>${this.title}</h2>
          <ul>
            ${this.renderAllTasks()/*return a string of all task HTML*/}
          </ul>
        </div>
      `)
  }

  renderAllTasks() { //returns a large string of HTML
    return this.tasks.map(task => task.render()).join("")
  }

}
