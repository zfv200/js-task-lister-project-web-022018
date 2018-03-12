document.addEventListener("DOMContentLoaded", () => {
  const newListForm = document.getElementById("create-list-form");
  const newListTitle = document.getElementById("new-list-title");

  newListForm.addEventListener("submit", e => console.log(e));
});
