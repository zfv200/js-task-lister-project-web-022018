document.addEventListener("DOMContentLoaded", () => {
  const newListForm = document.getElementById("create-list-form");
  const newListTitle = document.getElementById("new-list-title");
  const listDiv = document.getElementById("app-content");

  const app = new TaskLister();

  newListForm.addEventListener("submit", e => {
    e.preventDefault();
    app.handleNewList(newListTitle.value);
    listDiv.innerHTML = app.render();
    e.target.reset();
  });

  listDiv.addEventListener("change", e => {
    if (e.target.id === "parent-list") app.handleSelectChange(e.target.value);
    if (e.target.id === "new-task-description") app.handleDescriptionChange(e.target.value);
    if (e.target.id === "new-task-priority") app.handlePriorityChange(e.target.value);
  });

  listDiv.addEventListener("submit", e => {
    e.preventDefault();
    app.handleNewTask();
    listDiv.innerHTML = app.render();
    e.target.reset();
  });
});
