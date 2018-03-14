class List {
  constructor(title) {
    if (!title) throw new Error("Lists must have titles");

    this.title = title;
    this.tasks = [];
  }

  addTask(description, priority) {
    const newTask = new Task(description, priority);
    this.tasks.push(newTask);
  }

  renderTasks() {
    return this.tasks.map(task => task.render()).join("");
  }

  render() {
    return (`
      <div>
        <h2>${this.title}
          <button data-title="${this.title}" class="delete-list">
            X
          </button>
        </h2>
        <ul>
          ${this.renderTasks()}
        </ul>
      </div>
    `);
  }
}
