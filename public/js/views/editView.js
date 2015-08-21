define(['jquery', 'backbone','store','model','productView','handlebars','router'], function ($,Backbone,Bstore,BModel,BView,Hbs,BStarter){

	var EditView = Backbone.View.extend({
    tagName: 'div',
	className: 'edit',

	
	events:{
			"click #add-book":"addBook"
		},
    
    addBook:function(e){
			e.preventDefault();
    
			var title = this.$el.find("#title").val();
			var image = this.$el.find("#image").val();
			var bookModel = new BModel({title:title,image:image});	
			this.collection.add(bookModel);
            
	},
	
    render: function () {
    	var template = $("#editTemplate").html();
	    var html = Handlebars.compile(template);
		 $(this.el).html(html);
		return this;
		}
});

	return EditView;

});