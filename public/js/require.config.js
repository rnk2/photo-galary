require.config({
  baseUrl: '/js',
  paths: {
    'jquery': 'lib/jquery',
    'backbone': 'lib/backbone',
    'underscore': 'lib/underscore',
    'handlebars': 'lib/handlebars',
    'store':'models/store',
    'model':'models/model',
    'aboutView': 'views/aboutView',
    'editView':'views/editView',
    'bookView':'views/bookView',
    'productView':'views/productsView',
        'router':'routers/router'
  },
  shim: {

    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
    
    
  }
});

require(["init"]);
