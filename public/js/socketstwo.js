/** ALL SOKET HANDLING HERE */

//initializes socket.io
//for use while testing
//var socket = io('http://localhost:5000');
//for use while live
var socket = io('http://newterminus2.herokuapp.com/');
//initializes user count
var visitorCount = 0;
var previousCount = 0;
//initializes song position
var songCount = 0;

//array of numbers that act as the threshold of active listeners to make changes. thresh[0] is first thresshold, or 1. there are seven total.
var thresh = [1, 5, 10, 15, 20, 25, 30];

/* fires when 'visitorOn' tag is emitted from server, receives the user count from the server
handles user logging and updating the visible counter
*/

//tweets for connetion testing
socket.on('tweet', function(tweet) {
    console.log('tweet from', tweet.ID);
    console.log('contents:', tweet.text);
});

socket.on('visitorOn', function(counter, user) {
    //logs user count
    console.log('visitor count at ' + counter);
    //increments user counter, updates pointers
    previousCount = visitorCount;
    visitorCount = counter;
    console.log('count at ' + visitorCount + ' ' + 'previous ' + previousCount);
    //changes HTML of counter, changing syntax for proper grammar
    if (visitorCount === 1) {
        console.log('users connected is ' + counter);
        console.log('user ' + user.id + 'logged on');
        $('#listeners').html(counter);
    }
    if (visitorCount > 1) {
        console.log('users connected is ' + counter);
        console.log('user ' + user.id + 'logged on');
        $('#listeners').html(counter);
    }
});

/* fires when 'visitorOff' tag is emitted from server, receives the user count from the server
handles user logging and updating the visible counter
*/

socket.on('visitorOff', function(counter, user) {
    //logs user count
    console.log('visitor count at ' + counter);
    //increments user counter, updates pointers
    previousCount = visitorCount;
    visitorCount = counter;
    //changes HTML of counter, changing syntax for proper grammar
    if (visitorCount === 1) {
        console.log('users connected is ' + counter);
        console.log('user ' + user.id + 'logged off');
        $('#listeners').html(counter);
    }
    if (visitorCount > 1) {
        console.log('users connected is ' + counter);
        console.log('user ' + user.id + 'logged off');
        $('#listeners').html(counter);
    }
});

/* fires when 'songTime' tag is emitted from server, receives the time and handles changing play time and visible ID
*/

socket.on('timeTag', function(songTime) {
    console.log('song time is ' + songTime.toString().toHHMMSS());
    $('#time').html(songTime.toString().toHHMMSS());
    songCount = songTime;
});

/*
someone else's code that adds a prototype to convert a string to an hours/minutes/seconds readout
i modified it to remove hours
*/

String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var minutes = Math.floor((sec_num) / 60);
    var seconds = sec_num - (minutes * 60);

    if (minutes < 10) {minutes = minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time    = minutes+':'+seconds;
    return time;
}