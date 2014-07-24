// Tasks Controller

TasksController = {
  init: function() {
    
    var $addTaskForm = $('#add_task'),
      $selectListMenu = $('#select_list'),
      $taskDescriptionInput = $('#task_description'),
      $taskPriorityInput = $('#task_priority'),
      $wrapper = $('#wrapper');

    $addTaskForm.submit(function(event) {
      event.preventDefault();
      var listId = parseInt($selectListMenu.val()),
          taskDescription = $taskDescriptionInput.val(),
          taskPriority = $taskPriorityInput.val(),
          task = new Task(taskDescription, taskPriority, List.all[listId]);
      task.build();
      $taskDescriptionInput.val('');
      $taskPriorityInput.val('');
    });

    $wrapper.on('click', '.destroy-task', function(){ //live event listener
      var listId = parseInt($(this).parents('ul').data('id')),
          taskId = parseInt($(this).parent('li').data('id')),
          list = List.all[listId];
          list.tasks.splice(taskId, 1, null);
      $(this).parent('li').remove();
    });
  }
};