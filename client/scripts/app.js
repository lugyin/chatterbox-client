var test = {
 'username': 'Lu&Joe',
  'text': 'help',
  'roomname': 'HRW8-13A'
};

 var app = {};
 app.friends = [];
 app.init = function(){};



 $(document).ready(function(){

   app.get();

   $('#main').on('click', '.username', function(event) {
    app.addFriend($(this).val);
    console.log("added Friend");
  });

   app.handleSubmit();

   // $('h1').append('<div id="send"><input class="userName">Username</input><input class="submit">Message<button class="button">Submit</button></input></div>').on('click', '.button' ,function(event) {
   //   var message = $('.submit').val();
   //   var username = $('.userName').val();
   //   console.log(username, message);
   //   $('#chats').append('<div id="chats">' + 'message: ' +message + "<br>" + 'username: ' + '<span class="username">' + username + '</span>' +'</div>');
   // });


 });

app.handleSubmit = function() {
  $('h1').append('<div id="send"><input class="userName">Username</input><input class="submit">Message<button class="button">Submit</button></input></div>').on('click', '.button' ,function(event) {
     var message = $('.submit').val();
     var username = $('.userName').val();
     console.log(username, message);
     $('#message').append('<div id="chats">' + 'message: ' +message + "<br>" + 'username: ' + '<span class="username">' + username + '</span>' +'</div>');
   });
}

app.addFriend = function(value) {
  app.friends.push(value);
}

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

  $('#chats').append('<div id="chats">' + 'message: ' +message.text + "<br>" + 'username: ' + '<span class="username">' + message.username + '</span>' +'</div>');
};


app.addRoom = function(room){
  $('#roomSelect').append('<div id="room">' + message.roomname + '</div>');

};

app.get = function(){
  $.ajax({
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'GET',
      // data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        _.extend(app, data);
        console.log(app);
        for(var i = 0; i < app.results.length; i++) {
          $('#chats').append('<div id="chat">' + app.results[i].text + '</div>');
         $('#chats').append('<div class="username">' + app.results[i].username + '</div>');
        }
      },
      error: function (data) {
        // see: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to retrieve information');
      }
  });
};



