var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var counter = 0;
var songTime = 0;

//serving public folder
app.use(express.static(__dirname + '/public'));

//socket.io initialization, called when a user connects
io.on('connection', function(socket){
    /**tweets for connection testing
    console.log("We have a new client: " + socket.id);
    var tweet = {ID: socket.id, text: 'Hello, world!'};
    var interval = setInterval(function () {
        socket.emit('tweet', tweet);
    }, 1000);
    **/
    //logs user ID at connection
    console.log('a user connected ' + socket.id);
    //wraps user ID in an object for transmission
    var user = {id: socket.id};
    //increments user counter
    counter++;
    //emits counter to webpage
    io.emit('visitorOn', counter, user);
    //logs number of people on the page
    console.log('number of people connected = ' + counter);
    
    //called when users disconnect
    socket.on('disconnect', function(){
        //logs user ID at disconnect
        console.log('user disconnected ' + socket.id);
        //decrements user counter
        counter--;
        //emits counter to webpage
        io.emit('visitorOff', counter, user);
        //logs number of people on the page
        console.log('number of people connected = ' + counter);
    });
});

/* 
counter for song time, from 0 seconds to 205 seconds (3 minutes, 25 seconds), emitting tenth of a second
*/

timer();

function timer() {
    //increments to 205
    if (songTime < 205) {
        songTime++;
    }
    //resets at 205
    if (songTime === 205) {
        songTime = 0;
        io.emit('reset');
    }
    io.emit('timeTag', songTime);
    console.log('song is at ' + songTime);
    /* calls itself every second */
    var t = setTimeout(function() {
        timer();
    }, 1000);
}



//logging http
http.listen(process.env.PORT || 3000, function(){
    console.log('listening on', http.address().port);
});