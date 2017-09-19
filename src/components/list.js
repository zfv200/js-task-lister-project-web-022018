/*
list is responsible for creating a single list component
*/

class List {
  constructor(id, title) {
    this.id = id
    this.title = title
    this.tasks = []
    console.log(this);
  }

  render() {
    return (`
        <div class="list">
          <h2><button class="delete-list">X</button>${this.title}</h2>
          <ul id="list-${this.id}" data-id="${this.id}"></ul>
        </div>
      `)
  }

  renderAllTasks() {}

  handleDeleteTask() {}

}
