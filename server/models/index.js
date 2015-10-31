var db = require('../db');

db.connect(function(err) {
  if (err) {
    throw err;
  } else {
    console.log('connected!');
  }
});

module.exports = {
  messages: {
    get: function (cb) {
      db.query('SELECT username, textMSG from messages;', 
        function(err, rows, fields){
          if(err){
            throw err;
          } else {
            cb(err, rows);
          }
        });
      }
    }, // a function which produces all the messagesS
    post: function (message, cb) {
      console.log(message);
      db.query('INSERT into messages (username, textMSG, roomname) values (' + message.username + ', ' + message.text + ', ' + message.roomname + ');', 
        function(err, rows, fields){
          if(err){
            throw err;
          } else {
            cb(err, rows);
          }
        });
    },

  users: {
    // Ditto as above.
    get: function (cb) {
      db.query('SELECT DISTINCT username from users;', function(err, rows, fields) {
        if (err) {
          throw err;
        } else {
          cb(err, rows);
        }
      });
    },
    post: function (user, cb) {
      db.query('INSERT into users (username) values (' + user.username + ');', 
      function(err, rows, fields){
        if(err){
          throw err;
        } else {
          cb(err, rows);
        }
      });
    }
  }
};

