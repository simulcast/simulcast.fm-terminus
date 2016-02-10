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
    visitorToSound();
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
    visitorToSound();
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

/* fires when 'reset' tag is fired from the server, handles re-setting play on all the songs */
socket.on('reset', function(songTime) {
    console.log('resetting loops');
    visitorToSound();
    terminusDrums.play();
    terminusVox.play();
    terminusRhythm.play();
    terminusLead.play();
    terminusSynth.play();
    terminusBass.play();
});

/* FUNCTIONS TO CHECK VISITOR COUNT AND ACT ON IT */

/* checks to see how many people are on the site and determines which sounds to mute/unmute */
/* uses the thresh[] array */
function visitorToSound() {
    //if there's between one and four people, just the drums
    if (visitorCount >= 1 && visitorCount <= 4) {
        console.log('drums activated');
        terminusDrums.volume(1.0); 
        terminusVox.volume(0); 
        terminusRhythm.volume(0);
        terminusLead.volume(0);
        terminusBass.volume(0);
        terminusSynth.volume(0);
    }
    //if the second threshoold is hit and it's incrementing, add the vocals
    if (visitorCount === thresh[1] && visitorCount > previousCount) {
        console.log('vocals activated');
        terminusDrums.volume(1.0); 
        terminusVox.fade(0, 1.0, 500); //fades vol from 0 to one over 500ms 
        terminusRhythm.volume(0);
        terminusLead.volume(0);
        terminusBass.volume(0);
        terminusSynth.volume(0);
    }
    //if the second threshoold is hit and it's decrementing, remove the vocals
    if (visitorCount === thresh[1] && visitorCount < previousCount) {
        console.log('vocals deactivated');
        terminusDrums.volume(1.0); 
        terminusVox.fade(1.0, 0, 500); //fades vol from 1 to 0 over 500ms 
        terminusRhythm.volume(0);
        terminusLead.volume(0);
        terminusBass.volume(0);
        terminusSynth.volume(0);
    }
    //if the third threshoold is hit and it's incrementing, add the rhythm guitar
    if (visitorCount === thresh[2] && visitorCount > previousCount) {
        console.log('rhythm gtr activated');
        terminusDrums.volume(1.0); 
        terminusVox.volume(1.0); 
        terminusRhythm.fade(0, 1.0, 500);
        terminusLead.volume(0);
        terminusBass.volume(0);
        terminusSynth.volume(0);
    }
    //if the third threshoold is hit and it's decrementing, remove the rhythm guitar
    if (visitorCount === thresh[2] && visitorCount < previousCount) {
        console.log('rhythm gtr deactivated');
        terminusDrums.volume(1.0); 
        terminusVox.volume(1.0); 
        terminusRhythm.fade(1.0, 0, 500);
        terminusLead.volume(0);
        terminusBass.volume(0);
        terminusSynth.volume(0);
    }
    //if the fourth threshoold is hit and it's incrementing, add the lead guitar
    if (visitorCount === thresh[3] && visitorCount > previousCount) {
        console.log('lead gtr activated');
        terminusDrums.volume(1.0); 
        terminusVox.volume(1.0); 
        terminusRhythm.volume(1.0);
        terminusLead.fade(0, 1.0, 500);
        terminusBass.volume(0);
        terminusSynth.volume(0);
    }
    //if the fourth threshoold is hit and it's decrementing, remove the lead guitar
    if (visitorCount === thresh[3] && visitorCount < previousCount) {
        console.log('lead gtr deactivated');
        terminusDrums.volume(1.0); 
        terminusVox.volume(1.0); 
        terminusRhythm.volume(1.0);
        terminusLead.fade(1.0, 0, 500);
        terminusBass.volume(0);
        terminusSynth.volume(0);
    }
    //if the fifth threshoold is hit and it's incrementing, add the bass
    if (visitorCount === thresh[4] && visitorCount > previousCount) {
        console.log('bass aeactivated');
        terminusDrums.volume(1.0); 
        terminusVox.volume(1.0); 
        terminusRhythm.volume(1.0);
        terminusLead.volume(1.0);
        terminusBass.fade(0, 1.0, 500);
        terminusSynth.volume(0);
    }
    //if the fifth threshoold is hit and it's decrementing, remove the bass
    if (visitorCount === thresh[4] && visitorCount < previousCount) {
        console.log('bass deactivated');
        terminusDrums.volume(1.0); 
        terminusVox.volume(1.0); 
        terminusRhythm.volume(1.0);
        terminusLead.volume(1.0);
        terminusBass.fade(1.0, 0, 500);
        terminusSynth.volume(0);
    }
    //if the sixth threshoold is hit and it's incrementing, add the synths
    if (visitorCount === thresh[5] && visitorCount > previousCount) {
        console.log('synths activated');
        terminusDrums.volume(1.0); 
        terminusVox.volume(1.0); 
        terminusRhythm.volume(1.0);
        terminusLead.volume(1.0);
        terminusBass.volume(1.0);
        terminusSynth.fade(0, 1.0, 500);
    }
    //if the fifth threshoold is hit and it's decrementing, remove the synths
    if (visitorCount === thresh[5] && visitorCount < previousCount) {
        console.log('synths deactivated');
        terminusDrums.volume(1.0); 
        terminusVox.volume(1.0); 
        terminusRhythm.volume(1.0);
        terminusLead.volume(1.0);
        terminusBass.volume(1.0);
        terminusSynth.fade(1.0, 0, 500);
    };
};

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