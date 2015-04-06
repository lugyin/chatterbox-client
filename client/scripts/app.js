var message = {
 'username': 'Lu&Joe',
  'text': 'help',
  'roomname': 'HRW8-13A'
};

 var app = {};
 app.init = function(){};

 app.send = function(){};



$(document).ready(function(){
  //append app to <h1>chatterbox</h1>
  get();
});


var get = function(){
  $.ajax({
    url: 'https://api.parse.com/1/classes/chatterbox',
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
        console.error('chatterbox: Failed to retreieve information');
      }
  });
}


// $ajax({
//   url: 'https://api.parse.com/1/classes/chatterbox',
//   type: 'POST',
//   data: JSON.stringify(message),
//   contentType: 'application/json',
//   success: function (data) {
//     console.log('chatterbox: Message sent');
//   },
//   error: function (data) {
//     // see: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//     console.error('chatterbox: Failed to send message');
//   }
// });

