var db = require('../db');

db.connect();

module.exports = {
  messages: {
    get: function (req, res) {
      db.query('SELECT username, textMSG from messages;',
                        function(err) {
                          if (err)
                            throw err;
                          else
                            console.log('Works');
                        });
    }, // a function which produces all the messagesS
    post: function (req, res) {
      var data = "";
      req.on('data', function(err, chunk) {
        if (err) {
          throw err;
        } else {
          data += chunk;
        }
      });
      req.on('end', function(){
        db.query('INSERT into messages (username, textMSG, roomname) values (' + data.username + ', ' + data.text + ', ' + data.roomname + ');', function(err){
          if(err){
            throw err;
          } else {
            res.writeHead(200, headers);
            res.end();
          }
        });    
      });
      // 
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res) {
      db.query('SELECT DISTINCT username from users;', function(err) {
        if (err) {
          throw err;
        } else {
          console.log('Works');
        }
      });
    },
    post: function () {
      // db.query();
    }
  }
};

