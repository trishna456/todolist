var TodoItem = Backbone.Model.extend({
    urlRoot:"https://jsonplaceholder.typicode.com/todos",
    defaults:{
        "completed": false  
    },
    validate: function(attrs){
        if(!attrs.title)
            return "Title is required";
    },
    toggle: function(){
          this.set('completed', !this.get('completed'));
    }
});