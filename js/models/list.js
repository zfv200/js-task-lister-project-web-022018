// List Model

function List(title) {
  this.id = this.constructor.all.length;
  this.constructor.all.push(this);
  this.title = title;
  this.tasks = [];
}
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
List.all = [];