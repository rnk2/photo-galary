define(['jquery', 'backbone','store','productView','router'], function ($,Backbone,BStore,BookView,BStarter){

var BookView = Backbone.View.extend ({
    tagName: 'span',
    className: 'book',
    
    render: function() {
        var template = $("#bookTemplate").html();
                //console.log(template);
		var source = Handlebars.compile(template);
                //console.log(source);
		var html = source(this.model.toJSON());
		//console.log(html);
		$(this.el).append(html);
        return this;
    }
});

return BookView;
});