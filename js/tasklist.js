// List Model

function List(title) {
  //instance properties
  this.id = this.constructor.all.length;
  this.constructor.all.push(this);
  this.title = title;
  this.tasks = [];
}
//class properties
List.all = [];
//instance methods
List.prototype = {
  constructor: List,
  listEle: function() {
    return '<div><h2>'+this.title+'</h2><ul id="list-'+this.id+'" data-id="'+this.id+'"></ul></div>';
  },
  optionEle: function() {
    return '<option value="'+this.id+'">'+this.title+'</option>';
  },
  build: function() {
     $('#lists').append(this.listEle);
     $('#select_list').append(this.optionEle);
  },
  del: function() {
    //...
  },
  add_listeners: function() {
    //...
  }
}

// Task Model

function Task(description, priority, list) {
  //instance properties
  this.description = description;
  this.priority = priority;
  this.list = list;
  this.id = this.list.tasks.length;
  this.list.tasks.push(this);
}
//instance methods
Task.prototype = {
  constructor: Task,
  el: function() {
    return '<li data-id="'+this.id+'"><button class="close">x</button> '+this.description+', '+this.priority+'</li>';
  },
  build: function() {
    $('#list-'+this.list.id).append(this.el);
  },
  del: function() {
    //...
  },
  add_listeners: function() {
    //...
  }
}

// Controller

$(function() { // on document ready

  // var $addListForm = $('#add_list'),
  //     $listTitleInput = $('#list_title'),
  //     $addTaskForm = $('#add_task'),
  //     $selectListMenu = $('#select_list'),
  //     $taskDescriptionInput = $('#task_description'),
  //     $taskPriorityInput = $('#task_priority'),
  //     $listArea = $('#lists'),
  //     $wrapper = $('#wrapper');

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
        list.tasks.splice([taskId],1,null);
    $(this).parent('li').remove();
  });

});