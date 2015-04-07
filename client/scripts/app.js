var test = {
 'username': 'Lu&Joe',
  'text': 'help',
  'roomname': 'HRW8-13A'
};

 var app = {};
 app.init = function(){};



$(document).ready(function(){
  //append app to <h1>chatterbox</h1>
  $('.clickable').on('click', function(event) {

  });




});

app.server = 'https://api.parse.com/1/classes/chatterbox';

app.fetch = function(){
  $.ajax({
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'GET',
      // data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
      console.log('success');
      },
      error: function (data) {
        // see: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to retrieve information');
      }
  });
};



 app.send = function(message){

  $.ajax({
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      // see: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message');
    }
  });
};


app.clearMessages = function(){
  $('#chats').html('');
};

app.addMessage = function(message){

  $('#chats').append('<div id="chat">' + 'message: ' +message.text + "<br>" + 'username: ' + '<span class="clickable">' + message.username + '</span>' +'</div>');
};


app.addRoom = function(room){
  $('#roomSelect').append('<div id="room">' + message.roomname + '</div>');

};

// app.get = function(){
//   $.ajax({
//     url: 'https://api.parse.com/1/classes/chatterbox',
//     type: 'GET',
//       // data: JSON.stringify(message),
//       contentType: 'application/json',
//       success: function (data) {
//         _.extend(app, data);
//         console.log(app);
//         for(var i = 0; i < app.results.length; i++) {
//           $('#allChats').append('<div id="chat">' + app.results[i].text + '</div>');
//         }
//       },
//       error: function (data) {
//         // see: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//         console.error('chatterbox: Failed to retrieve information');
//       }
//   });
// };


