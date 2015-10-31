var models = require('../models');

var sendResponse = function(res, err, data){
  if(err){
    throw err;
  } else {
    res.send(data);
  }
};

module.exports = {
  messages: {
    get: function (req, res) {
      console.log(HEY);
      models.messages.get(function(err, content){
        sendResponse(res, err, 200);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log("POST");
      var data = req.body;
      models.messages.post(data, function(err, data){
        sendResponse(res, err, 200);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

