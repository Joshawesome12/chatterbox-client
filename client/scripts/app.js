// YOUR CODE HERE:
var app = {
};
app.init = function() {
    app.$main = $('#main');
  app.$chats = $('#chats');
  app.server = 'http://parse.atx.hackreactor.com/chatterbox/classes/messages';
 
  $('#msgForm').on('submit', function(event) {
    event.preventDefault();
    app.send();
  });
  app.fetch();
}
app.send = function(message) {
    $.ajax({
      url: app.server,
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
app.fetch = function() {
    $.ajax({
      url: app.server,
      type: 'GET',
      //data: message,
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message retrieved');
      },
      error: function (data) {
        console.error('chatterbox: Failed to fetch message', data);
      }
    });
}
app.clearMessages = function() {
    app.$chats.children().remove();
};
app.renderMessage = function(message) {
    app.$chats.children().append(message.value);
};
app.renderRoom = function(room) {
    
};