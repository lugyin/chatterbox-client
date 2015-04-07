var message = {
 'username': 'Lu&Joe',
  'text': 'help',
  'roomname': 'HRW8-13A'
};

 var app = {};
 app.init = function(){};



$(document).ready(function(){
  //append app to <h1>chatterbox</h1>
  app.fetch();
});




app.fetch = function(){
  $.ajax({
    // url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'GET',
      // data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        _.extend(app, data);
        console.log(app);
        for(var i = 0; i < app.results.length; i++) {
          $('h1').append('<div>' + app.results[i].text + '</div>');
        }
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
  $('#chat').html('');
};

app.addMessage = function(message){
  $('h1').append('<div #chat>' + message.text + '</div>');

}

app.addRoom = function(room){

}



