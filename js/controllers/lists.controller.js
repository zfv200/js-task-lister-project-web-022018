// Lists Controller

ListsController = {
  init: function() {
    
    var $addListForm = $('#add_list'),
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
      List.all.splice(listId, 1, null);
      $selectListMenu.find('option[value="'+listId+'"]').remove();
      $(this).parents('.list').remove();
    });
  }
};