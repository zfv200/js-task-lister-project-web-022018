// List Model



// Task Model



// Controller

$(function() { // on document ready

  var $addListForm = $('#add_list'),
      $listTitleInput = $('#list_title'),
      $addTaskForm = $('#add_task'),
      $selectListMenu = $('#select_list'),
      $taskDescriptionInput = $('#task_description'),
      $taskPriorityInput = $('#task_priority'),
      $listArea = $('#lists'),
      $wrapper = $('#wrapper');

  $addTaskForm.hide(); // initially hide add task form

  $addListForm.submit(function(event) {
    event.preventDefault();
    var listTitle = $listTitleInput.val(),
        list = new List(listTitle);
    list.build();
    $addTaskForm.one().show();
  });

  $addTaskForm.submit(function(event) {
    event.preventDefault();
    var listId = parseInt($selectListMenu.val()),
        taskDescription = $taskDescriptionInput.val(),
        taskPriority = $taskPriorityInput.val(),
        task = new Task(taskDescription, taskPriority, List.all[listId]);
    task.build();
  });

  $wrapper.on('click', '.close', function(){
    var listId = parseInt($(this).parents('ul').data('id')),
        taskId = parseInt($(this).parent('li').data('id')),
        list = List.all[listId];
        list.tasks.splice([taskId],1);
    $(this).parent('li').remove();
  });

});