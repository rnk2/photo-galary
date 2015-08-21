var express = require('express'),
    http = require('http'),
    path = require('path'),
    morgan  = require('morgan'),
    bodyParser = require('body-parser');
    handlebars=require('express4-handlebars');

var app = express();

    app.set('port', process.env.PORT || 3000);
    
    // set the view engine to ejs
    app.use(express.static(__dirname + '/public'));
    app.set('views', __dirname + '/public/views');
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');

    // app.set('view engine', 'html');
    // app.engine('html',handlebars.__express);
    


	// instruct the app to use the `morgan()` middleware for log every request to the console
	app.use(morgan('dev')); 

	// instruct the app to use the `bodyParser()` middleware for all routes
	app.use(bodyParser()); 

    // app.use(app.router);
    

    

    

    // app.configure('development', function(){
    //   app.use(express.errorHandler());
    // });

   require('./config/routes').init(app);
	//app.get('/', routes.index);
	// app.get('/books', routes.books.all);


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});