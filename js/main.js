$(document).ready(function(){
//    var todoItem = new TodoItem({title:"todoitem1"});
//    var todoItemView = new TodoItemView({model:todoItem});
//    $("body").append(todoItemView.render().$el);
//    
//    var todoItems = new TodoItems([
//        new TodoItem({id:1,title:"td1"}),
//        new TodoItem({id:2,title:"td2"}),
//        new TodoItem({id:3,title:"td3"})
//    ]);
    
    var todoItems = new TodoItems();
    todoItems.fetch();
    
    var todoItemsView = new TodoItemsView({model:todoItems});
    $("body").append(todoItemsView.render().$el);
});