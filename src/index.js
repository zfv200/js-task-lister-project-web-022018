document.addEventListener("DOMContentLoaded", () => {
  const newListForm = document.getElementById("create-list-form");
  const newListTitle = document.getElementById("new-list-title");
  const listDiv = document.getElementById("app-content");

  const app = new TaskLister();
  newListForm.addEventListener("submit", event => {
    event.preventDefault();
    app.handleNewList(newListTitle.value);
    listDiv.innerHTML = app.render();
  });
});
