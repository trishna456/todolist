var TodoItemsView = Backbone.View.extend({
//    tagName:"ul",
//    id:"todoItems",
    id:"todoItemsContainer",
    initialize: function(options){
        if(!(options && options.model))
            throw new Error("Model is not specified");
        this.model.on("add",this.onItemAdded,this);
        this.model.on("remove", this.onItemRemove, this);
   },
    events: {
//        "click #add":"onAddClicked",
        "keypress #textBox":"onKeyPress"
    },
    onItemRemove: function(todoItem){
        console.log("removed");  
        $("li#"+todoItem.id).remove();
    },
    onItemAdded: function(newTodoItem){
        var newTodoItemView = new TodoItemView({model:newTodoItem});
        this.$("#todoItems").prepend(newTodoItemView.render().$el);
    },
    onKeyPress: function(e){
        if(e.keyCode == 13){
//            this.onAddClicked();
            var $textbox = this.$("#textBox");
            if($textbox.val()){
                var newTodoItem = new TodoItem({title:$textbox.val()});
    //          this.model.add(newTodoItem);
    //          newTodoItem.save();

                this.model.create(newTodoItem);            
                $textbox.val("");   
                }
        }

    },
//    onAddClicked: function(){
//        var $textbox = this.$("#textBox");
//        if($textbox.val()){
//            var newTodoItem = new TodoItem({title:$textbox.val()});
////          this.model.add(newTodoItem);
////          newTodoItem.save();
//            
//            this.model.create(newTodoItem);            
//            $textbox.val("");   
//        }
//    },
    render: function(){
            var template = $("#todoItemsTemplate").html();
            var html = Mustache.render(template, this.model.toJSON());
            this.$el.html(html);
        
//        this.model.each(function(todoItem){
//            var view = new TodoItemView({model:todoItem});
//            this.$el.append(view.render().$el);
//        },this);
        return this;
    }
});