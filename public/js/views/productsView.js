define(['jquery','backbone','store','bookView','router'], function ($,Backbone,BStore,BookView,BStarter){
     
    
// List of Books View
    BookListView = Backbone.View.extend({
    el: '.feed',
    initialize: function(options) {
            this.collection = options.collection;           
            this.render();
            this.listenTo( this.collection, 'add', this.renderBook );
        },
    render: function() {
        self=this;
        console.log("render");
        self.$el.empty();
        self.collection.each(function( item ){
            self.renderBook( item );
        }, this);
        console.log("end of main view");
    },
    renderBook: function ( item ) {
        console.log("main BookView");
        var bookview = new BookView ({
            model: item
        });            
        this.$el.append( bookview.render().el );
    } 
});
    
    return BookListView;

});