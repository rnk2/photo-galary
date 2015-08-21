define(['jquery', 'backbone','handlebars','router'], function ($,Backbone,Hbs,BStarter){
AboutView = Backbone.View.extend({
    tagName: 'div',
    className: 'about',
    // template: _.template( $( '#aboutTemplate' ).html()),
    render: function () {
        console.log("from about view");
        var template = $("#aboutTemplate").html();
        var html = Handlebars.compile(template);
        
        $(this.el).html(html);
        return this;
    }

});

return AboutView;

});