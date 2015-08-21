define(['jquery', 'backbone','store','productView','editView','router'], function ($,Backbone,BStore,BView,EditView){

var Book = Backbone.Model.extend({
    defaults: {
        title:'',
        image:'',       
    },
    initialize:function(){
        console.log("model created from m");
    }
});

return Book;
});