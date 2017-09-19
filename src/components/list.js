/*
list is responsible for creating a single list component
*/

class List {
  constructor(id, title) {
    this.id = id
    this.title = title
    this.tasks = []
    this.taskIds = 0
  }

  render() {
    return (`
        <div class="list">
          <h2><button class="delete-list">X</button>${this.title}</h2>
          <ul id="list-${this.id}" data-id="${this.id}">
            ${this.renderAllTasks()}
          </ul>
        </div>
      `)
  }

  renderAllTasks() {
    return this.tasks.map(task => task.render()).join("")
  }

}
