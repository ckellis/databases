var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      db.query('SELECT * m.username, m.textMSG from messages m inner join rooms r on (r.rID=m.rID);',
                        function(err) {
                          if (err)
                            throw err;
                          else
                            console.log('Works');
                        });
    }, // a function which produces all the messagesS
    post: function () {
      db.query('INSERT into messages (')
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {

    },
    post: function () {

    }
  }
};

