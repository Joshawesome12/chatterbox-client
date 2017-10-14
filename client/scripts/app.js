
var app = {
 server:'http://parse.atx.hackreactor.com/chatterbox/classes/messages',
 username: 'Josh',
 roomname: 'lobby',
 messages: [],
 lastMessageId: 0,

  init: function() {
    //get username
    app.username = window.location.search.substr(10);

    //cache jQuery selectors
    app.$message = $('#message');
    app.$chats = $('#chats');
    app.$roomSelect = $('#roomSelect');
    app.$send = $('#send');

    //add listeners
    app.$send.on('submit', app.handleSubmit);

    //Fetch previous messages on startup
    app.fetch();

    //Poll for new messages
    // setInterval(function(){
    //   app,fetch();
    // },3000);
  },

  fetch: function(){
    $.ajax({
      type: 'GET',
      url: app.server,
      data: {order: '-createdAt'},
      success: function(data){
        //Don't do anything if we have nothing to work with
        if (!data.results || !data.results.length){return;}
        //Store messages for caching later
        app.messages = data.results;

        var mostRecentMessage = app.messages[app.messages.length - 1];
        //Only bother updating the DOM if we have a new message
        if (mostRecentMessage.objectId !== app.lastMessageId){
          app.renderMessages(app.messages);
        }
        console.log('success');
        console.dir(data);
      },
      error: function(error){
        console.error(error);
      }
    })
  },

  renderMessages: function(messages){
    //clear old messages
    app.clearMessages();
    //render each individual message
    messages.forEach(function(message){app.renderMessage(message)});
  },

  clearMessages: function(){
    app.$chats.html('');
  },
  renderMessage: function(message){
    // create a div to hold the message
      var $chat = $('<div class="chat"/>');
      //add in the message data
      var $username = $('<span class="username">' + message.username + '</span>');
      $username.appendTo($chat);
      
      var $message = $('<br><span>' + message.text + '</span>');
      $message.appendTo($chat);

      //add the message to the UI
      app.$chats.append($chat);
  },

  handleSubmit: function(event){
    var message = {
        username: app.username,
        text: app.$message.val(),
        roomname: app.roomname || 'lobby',
      };
    //POST a message to the server
    $.ajax({
      type: 'POST',
      url: app.server,
      data: message,
      success: function(){
        //Success? Trigger a fetch to update the messages
        app.fetch();
      },
      error: function(error){
        //Fail?  Show an error in the console
        // console.error('chatterbox: failed to send message', error)
      }
    });
    event.preventDefault();
  },

};





































































































// pre solution video
// // PROTOTYPAL
// // YOUR CODE HERE:

// var app = {
//   server: 'http://parse.atx.hackreactor.com/chatterbox/classes/messages',
//   $chats: $('#chats')
// };
// app.init = function() {
//   $('#msgForm').on('submit', function(event) {
//     console.log('app.server', app.server);
//     event.preventDefault();
//     app.send();
//   });
//   app.fetch();
// };
// app.send = function(message) {
//   console.log(message);
//   $.ajax({
//     url: this.server,
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
//     url: this.server,
//     type: 'GET',
//     data: {"order":"-createdAt"},
//     contentType: 'application/json',
//     success: function (data) {
//       console.log('chatterbox: Message retrieved');
//       console.log('data', data);
//     },
//     error: function (data) {
//       console.error('chatterbox: Failed to fetch message', data);
//     }
//   });
// };
// app.clearMessages = function() {
//   this.$chats.children().remove();
// };
// app.renderMessage = function(message) {
//   this.$chats.children().append(message.value);
// };
// app.renderRoom = function(room) {
    
// };





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