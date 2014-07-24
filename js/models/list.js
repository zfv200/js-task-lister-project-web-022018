// List Model

function List(title) {
  //public properties (instance)
  this.id = this.constructor.all.length;
  this.constructor.all.push(this);
  this.title = title;
  this.tasks = [];
}
//public methods (instance)
List.prototype = {
  constructor: List,
  listEle: function() {
    return '<div class="list"><h2><button class="destroy-list">x</button> '+this.title+'</h2><ul id="list-'+this.id+'" data-id="'+this.id+'"></ul></div>';
  },
  optionEle: function() {
    return '<option value="'+this.id+'">'+this.title+'</option>';
  },
  build: function() {
     $('#lists').append(this.listEle());
     $('#select_list').append(this.optionEle());
  }
};
//static properties & methods (class)
List.all = [];
List.init = function() {

  var   $addListForm = $('#add_list'),
        $listTitleInput = $('#list_title'),
        $selectListMenu = $('#select_list'),
        $addTaskForm = $('#add_task'),
        $wrapper = $('#wrapper');

  $addTaskForm.hide(); // initially hide add task form

  $addListForm.submit(function(event) {
    event.preventDefault();
    var listTitle = $listTitleInput.val(),
        list = new List(listTitle);
    list.build();
    $addTaskForm.one().show();
    $listTitleInput.val('');
  });

  $wrapper.on('click', '.destroy-list', function(){ //live event listener
    var listId = parseInt($(this).parents('h2').next('ul').data('id'));
    List.all.splice([listId],1,null);
    $selectListMenu.find('option[value="'+listId+'"]').remove();
    $(this).parents('.list').remove();
  });
};