define(['jquery', 'backbone','store','productView','aboutView','editView'], function ($,Backbone,BStore,BView,AboutView,EditView){
	
var Router = Backbone.Router.extend({

    routes: {
		'' : 'about',
		'home' : 'home',
		'edit' : 'edit',
	},

	 

	home: function () {

		
		console.log(BStore.toJSON());
		
		if(!this.bookListView){
    		this.bookListView = new BView({collection:BStore});    		
        }else{
            this.bookListView.render();
        }
	},



	about: function () { 
		console.log("about page");
		if (!this.aboutView) {
	        this.aboutView = new AboutView();
		}
	        $('.feed').html(this.aboutView.render().el);
	},

	edit: function () {
		console.log("edit view");
		if (!this.editView) {
            var coll = this.bookListView.collection;
    this.editView = new EditView({collection:BStore});
		};

		$('.feed').html(this.editView.render().el);
	}
    
   
});

return Router;
});


    
 