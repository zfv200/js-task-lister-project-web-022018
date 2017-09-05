// Initialize
document.addEventListener("DOMContentLoaded", () => {
  const newListForm = document.getElementById("create-list")
  const newListTitleField = document.getElementById("new-list-title")
  newListForm.addEventListener("submit", () => createNewList(newListTitleField))
})

// $(function() { // on document ready
//   listController = new ListsController();
//   listController.init();
//   tasksController = new TasksController();
//   tasksController.init();
// });
