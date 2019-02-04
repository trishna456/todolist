var TodoItemView = Backbone.View.extend({
    tagName:"li",
    initialize: function(options){
        if(!(options && options.model))
            throw new Error("Model is not specified.");
        this.model.on("change",this.render,this);
    },
    events: {
        "click #toggle":"onToggleClick", 
        "click #delete":"onDeleteClicked"
    },
    onDeleteClicked: function(){
        this.model.destroy();
    },
    onToggleClick: function(){
        this.model.toggle();
        this.model.save();
        console.log(this.model.toJSON());
    },
    render: function(){
        this.$el.attr('id',this.model.id);
        this.$el.toggleClass("completed", this.model.get('completed'));
        
        var template = $("#todoItemTemplate").html();
        var html = Mustache.render(template, this.model.toJSON());
        this.$el.html(html);
        
//        var checked = this.model.get("completed") ? "checked" : "";
//        this.$el.html("<input id='toggle' type='checkbox'" +checked+ "></input>"+this.model.escape("title")+"<button id='delete'>DELETE</button>");
        
        return this;
    }
});