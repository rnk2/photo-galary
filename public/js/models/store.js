define(['jquery', 'backbone','productView','router'], function ($,Backbone,BView){

	
// Sample Data

var books = [

            {title:'Imperial Bedrooms',image:'http://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Imperial_bedrooms_cover.JPG/200px-Imperial_bedrooms_cover.JPG' 
            },

            {title:'Less than zero', 
            image:'http://d.gr-assets.com/books/1282271923l/9915.jpg' 
            },

];
    

    // Model
    
var Book = Backbone.Model.extend({
    defaults: {
        title:'',
        image:'',       
    },
    initialize:function(){
        console.log("model created");
    }
});
    
// Collection    
    
var BookList = Backbone.Collection.extend ({
    model: Book,
    //url: 'data/items.json',
	initialize:function()
	{
		console.log("collection created");	
	}
});

var bookList=new BookList(books);

  

return bookList;

});