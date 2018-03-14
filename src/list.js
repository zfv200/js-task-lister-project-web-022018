class List {
  constructor(title) {
    if (!title) throw new Error("Lists must have titles");
    this.title = title;
    this.tasks = [];
  }

  addTask(newTaskDescription, priority) {
    if (this.tasks.find(({ description }) => newTaskDescription === description)) {
      window.alert("Task descriptions must be unique");
    } else {
      const newTask = new Task(this, newTaskDescription, priority);
      this.tasks.push(newTask);
    }
  }

  deleteTask(taskDescription) {
    this.tasks = this.tasks.filter(({ description }) => taskDescription !== description);
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
