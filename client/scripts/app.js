// PROTOTYPAL
// YOUR CODE HERE:

var app = {
  server: 'http://parse.atx.hackreactor.com/chatterbox/classes/messages',
  $chats: $('#chats')
};
app.init = function() {
  $('#msgForm').on('submit', function(event) {
    console.log('app.server', app.server);
    event.preventDefault();
    app.send();
  });
  app.fetch();
};
app.send = function(message) {
  console.log(message);
  $.ajax({
    url: this.server,
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
};
app.fetch = function() {
  $.ajax({
    url: this.server,
    type: 'GET',
    data: {"order":"-createdAt"},
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message retrieved');
      console.log('data', data);
    },
    error: function (data) {
      console.error('chatterbox: Failed to fetch message', data);
    }
  });
};
app.clearMessages = function() {
  this.$chats.children().remove();
};
app.renderMessage = function(message) {
  this.$chats.children().append(message.value);
};
app.renderRoom = function(room) {
    
};





































//---------------------------------------------------------------------------------
// // YOUR CODE HERE:
// var app = {
// };
// app.init = function() {
//   app.$main = $('#main');
//   app.$chats = $('#chats');
//   app.server = 'http://parse.atx.hackreactor.com/chatterbox/classes/messages';
 
//   $('#msgForm').on('submit', function(event) {
//     event.preventDefault();
//     app.send();
//   });
//   app.fetch();
// };
// app.send = function(message) {
//   $.ajax({
//     url: app.server,
//     type: 'POST',
//     data: message,
//     contentType: 'application/json',
//     success: function (data) {
//       console.log('chatterbox: Message sent');
//     },
//     error: function (data) {
//       console.error('chatterbox: Failed to send message', data);
//     }
//   });
// };
// app.fetch = function() {
//   $.ajax({
//     url: app.server,
//     type: 'GET',
//     //data: message,
//     contentType: 'application/json',
//     success: function (data) {
//       console.log('chatterbox: Message retrieved');
//     },
//     error: function (data) {
//       console.error('chatterbox: Failed to fetch message', data);
//     }
//   });
// };
// app.clearMessages = function() {
//   app.$chats.children().remove();
// };
// app.renderMessage = function(message) {
//   app.$chats.children().append(message.value);
// };
// app.renderRoom = function(room) {
    
// };