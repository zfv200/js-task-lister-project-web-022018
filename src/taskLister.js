class TaskLister {
  constructor() {
    this.lists = [];
  }

  handleNewList(title) {
    const newList = new List(title);
    this.lists.push(newList);
  }

  renderOptions() {
    return this.lists.map(list => `<option value="${list.title}">${list.title}</option>`).join("");
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
        </form>
        <div id="lists">
          ${this.renderLists()}
        </div>
      `);
  }
}

//
// <form id="create-task-form" action="#" method="post">
//   <label for="parent-list">Select List:</label>
//   <select id="parent-list" name="parent-list"></select>
//   <label for="new-task-description">Task description:</label>
//   <input type="text" id="new-task-description" name="new-task-description" placeholder="description">
//   <label for="new-task-priority">Priority level:</label>
//   <input type="text" id="new-task-priority" name="new-task-priority" placeholder="priority">
//   <input type="submit" value="Create New Task">
// </form><!-- #create-task-form -->
