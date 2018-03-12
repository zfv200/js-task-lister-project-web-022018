class List {
  constructor(title) {
    if (!title) throw new Error("Lists mus have titles");

    this.title = title;
    this.tasks = [];
  }

  addTask(description, priority) {
    const newTask = new Task(description, priority);
    this.tasks.push(newTask);
    this.render();
  }

  renderTasks() {
    return this.tasks.map(task => task.render()).join("");
  }

  render() {
    return (`
      <div class="list">
        <h2><button class="delete-list">X</button></h2>
        <ul>${this.renderTasks()}</ul>
      </div>
        `);
  }
}
