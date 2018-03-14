class TaskLister {
  constructor() {
    this.lists = [];
    this.activeList = null;
    this.newDescription = null;
    this.newPriority = null;
  }

  handleNewList(title) {
    const newList = new List(title);
    this.lists.push(newList);
    this.activeList = newList;
  }

  handleSelectChange(list) {
    this.activeList = this.lists.find(l => l.title === list);
  }

  handleDescriptionChange(description) {
    this.newDescription = description;
  }

  handlePriorityChange(priority) {
    this.newPriority = priority;
  }

  handleNewTask() {
    this.activeList.addTask(this.newDescription, this.newPriority);
    this.newDescription = null;
    this.newPriority = null;
  }

  deleteList(listTitle) {
    this.lists = this.lists.filter(({ title }) => listTitle !== title);
  }

  renderOptions() {
    return this.lists.map(({ title }) =>
      (`
        <option value="${title}" ${this.activeList.title === title ? "selected" : ""}>
          ${title}
        </option>`
      )
    ).join("");
  }

  renderLists() {
    return this.lists.map(list => list.render()).join("");
  }

  render() {
    return (`
      <form id="create-task-form">
        <label for="parent-list">Select List:</label>
        <select id="parent-list">
          ${this.renderOptions()}
        </select>

        <label for="new-task-description">Task description:</label>
        <input type="text" id="new-task-description" placeholder="description">

        <label for="new-task-priority">Priority level:</label>
        <input type="text" id="new-task-priority" placeholder="priority">
        <input type="submit" value="Create New Task"></input>
        </form>
        <div id="lists">
          ${this.renderLists()}
        </div>
      `);
  }
}
