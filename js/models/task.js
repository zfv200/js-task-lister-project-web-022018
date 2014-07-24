// Task Model

function Task(description, priority, list) {
  //public properties (instance)
  this.description = description;
  this.priority = priority;
  this.list = list;
  this.id = this.list.tasks.length;
  this.list.tasks.push(this);
}
//public methods (instance)
Task.prototype = {
  constructor: Task,
  el: function() {
    return '<li data-id="'+this.id+'"><button class="destroy-task">x</button> '+this.description+', '+this.priority+'</li>';
  },
  build: function() {
    $('#list-'+this.list.id).append(this.el());
  }
};
// static properties (class)
Task.init = function() {

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
        list.tasks.splice([taskId],1,null);
    $(this).parent('li').remove();
  });

};