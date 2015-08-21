/** 
 * Routes
 * Module dependencies.
 */
// var config = require('./config');

var userController = require('../app/controller/users');

exports.init = function(app) {
    console.log('Initializing Routes');
    
    // Campaign Routes    
    
    
    app.get('*',userController.home);
};
