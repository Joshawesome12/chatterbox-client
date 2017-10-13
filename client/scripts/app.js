// YOUR CODE HERE:
var app = {

};

app.init = function () {
  return true;
};

app.send = function(message){
	$.ajax({
  url: 'http://parse.atx.hackreactor.com/chatterbox/classes/messages',
  type: 'POST',
  data: message,
  contentType: 'application/json',
  success: function (data) {
    console.log('chatterbox: Message sent');
  },
  error: function (data) {
    console.error('chatterbox: Failed to send message', data);
  }
});
}


app.fetch = function(){
	$.ajax({
  url: undefined,
  type: 'GET',
  data: JSON.stringify(message),
  contentType: 'application/json',
  success: function (data) {
    console.log('chatterbox: Message recieved');
  },
  error: function (data) {
    console.error('chatterbox: Failed to retrieve message', data);
  }
});
}

// ### API Keys:
//  * Server: http://parse.atx.hackreactor.com/chatterbox/classes/messages
//  * App ID: 28f10c64a8b1b900a057b74cabaebaf474573436
//  * API Key: 7543f778eede3b2723e3018977563e69738d7c1b

app.clearMessages = function(){
	return $.ajax({
    url: 'http://parse.atx.hackreactor.com/chatterbox/classes/messages',
    type: 'DELETE',
    // success: callback,
    data: message,
    contentType: 'application/json',
  });
}

app.renderMessage = function(message){

}

app.renderRoom = function(){

}