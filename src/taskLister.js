class TaskLister {
  constructor() {
    this.lists = [];
    this.activeList = null;
    this.newDescription = null;
    this.newPriority = null;
  }

  handleNewList(newListTitle) {
    if (this.lists.find(({ title }) => newListTitle === title)) {
      window.alert("List titles must be unique");
    } else {
      const newList = new List(newListTitle);
      this.lists.push(newList);
      this.activeList = newList;
    }
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
    this.activeList = this.lists[0];
  }

  renderForm() {
    if (this.lists.length) {
      return (`
        <form id="create-task-form">
          <label for="parent-list">Select List:</label>
          <select id="parent-list">
            ${this.renderOptions()}
          </select>

          <label for="new-task-description">Task description:</label>
          <input required type="text" id="new-task-description" placeholder="description">

          <label for="new-task-priority">Priority level:</label>
          <input type="text" id="new-task-priority" placeholder="priority">
          <input type="submit" value="Create New Task"></input>
        </form>
      `);
    } else {
      return "";
    }
  }

  renderOptions() {
    return this.lists.map(({ title }) => {
      return (`
        <option value="${title}"
          ${this.activeList.title === title ? "selected" : ""}
        >
          ${title}
        </option>
      `)
    }).join("");
  }

  renderLists() {
    return this.lists.map(list => list.render()).join("");
  }

  render() {
    return (`
      ${this.renderForm()}
      <div id="lists">
        ${this.renderLists()}
      </div>
    `);
  }
}
