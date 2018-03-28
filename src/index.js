document.addEventListener("DOMContentLoaded", () => {
  const newListForm = document.getElementById("create-list-form");
  const newListTitle = document.getElementById("new-list-title");
  const listDiv = document.getElementById("app-content");

  const app = new TaskLister();
  const renderApp = () => listDiv.innerHTML = app.render();

  newListForm.addEventListener("submit", e => {
    e.preventDefault();
    app.handleNewList(newListTitle.value);
    renderApp();
    e.target.reset();
  });

  listDiv.addEventListener("change", e => {
    if (e.target.id === "parent-list") app.handleSelectChange(e.target.value);
    if (e.target.id === "new-task-description") app.handleDescriptionChange(e.target.value);
    if (e.target.id === "new-task-priority") app.handlePriorityChange(e.target.value);
  });

  listDiv.addEventListener("click", e => {
    if (e.target.className === "delete-list") {
      app.deleteList(e.target.dataset.title);
      renderApp();
    } else if (e.target.className === "delete-task") {
      app.deleteTask(e.target.dataset.listTitle, e.target.dataset.taskName);
      renderApp();
    }
  });

  listDiv.addEventListener("submit", e => {
    e.preventDefault();
    app.handleNewTask();
    renderApp();
    e.target.reset();
  });
});
