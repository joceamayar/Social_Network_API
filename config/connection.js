const { connect, connection } = require('mongoose');

connect('mongodb://127.0.0.1:27017/videosAndResponses');//what is it connecting to? 

module.exports = connection;
