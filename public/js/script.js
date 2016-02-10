var loadCount = 0;
var rec;

$(document).ready(function() {
    /* hide things that need to be hidden at start */
    $('#dashboard-left').hide();
    $('#instructionwrap').hide();
    $('#record').hide();
    $('#stop').hide();

    /* homebrew clicktoggle */

    $.fn.clicktoggle = function(a, b) {
        return this.each(function() {
            var clicked = false;
            $(this).click(function() {
                if (clicked) {
                    clicked = false;
                    return b.apply(this, arguments);
                }
                clicked = true;
                return a.apply(this, arguments);
            });
        });
    };

    /* recorder js! */

    $("#record").clicktoggle(function() {
        console.log(masterGain);
        rec = new Recorder(masterGain, {
            workerPath: 'js/recorderjs/recorderWorker.js',
            callback: function(e){
                console.log('this line hit');
                rec.clear();

                Recorder.forceDownload(e, "terminus-recording.wav");
            }
        });
        rec.record();
        $(this).html('STOP + DOWNLOAD');
    }, function() {
        console.log('stop clicked');
        rec.stop();
        rec.exportWAV();
        $(this).html('record');
    });


    /* setting up Howls for each individual stem */
    terminusDrums = new Howl({
        src: ['stems/terminus-drums.mp3', 'stems/terminus-drums.ogg'],
        autoplay: false,
        loop: false,
        onload: function(){
            console.log('drum stem loaded!');
            loadCount++;
            console.log('load count is ' + loadCount);
            checkLoad();
        }
    });
    terminusVox = new Howl({
        src: ['stems/terminus-vox.mp3', 'stems/terminus-vox.ogg'],
        autoplay: false,
        loop: false,
        onload: function(){
            console.log('vox stem loaded!');
            loadCount++;
            console.log('load count is ' + loadCount);
            checkLoad();
        }
    });
    terminusLead = new Howl({
        src: ['stems/terminus-lead.mp3', 'stems/terminus-lead.ogg'],
        autoplay: false,
        loop: false,
        onload: function(){
            console.log('lead gtr stem loaded!');
            loadCount++;
            console.log('load count is ' + loadCount);
            checkLoad();
        }
    });
    terminusRhythm = new Howl({
        src: ['stems/terminus-rhythm.mp3', 'stems/terminus-rhythm.ogg'],
        autoplay: false,
        loop: false,
        onload: function(){
            console.log('rhythm gtr stem loaded!');
            loadCount++;
            console.log('load count is ' + loadCount);
            checkLoad();
        }
    });
    terminusBass = new Howl({
        src: ['stems/terminus-bass.mp3', 'stems/terminus-bass.ogg'],
        autoplay: false,
        loop: false,
        onload: function(){
            console.log('bass stem loaded!');
            loadCount++;
            console.log('load count is ' + loadCount);
            checkLoad();
        }
    });
    terminusSynth = new Howl({
        src: ['stems/terminus-synth.mp3', 'stems/terminus-synth.ogg'],
        autoplay: false,
        loop: false,
        onload: function(){
            console.log('synth stem loaded!');
            loadCount++;
            console.log('load count is ' + loadCount);
            checkLoad();
        }
    });
});

/* called when a sound is loaded
if load count is 6 (all songs), then hit play and remove the loading span */

function checkLoad() {
    if (loadCount === 6) {
        //change loading banner to simulcast.fm
        $('#dashboard-left-preload').hide();
        $('#dashboard-left').show();
        //show shit on load
        $('#instructionwrap').fadeIn(1000);
        $('#record').fadeIn(1000);
        $('#stop').fadeIn(1000);
        playSong();
    }
};

/* PLAY SONG FUNCTION CALLED AT FINAL LOAD */

function playSong() {
    console.log('sound playing!');
    console.log('start time is ' + songCount);
    visitorToSound(); //called to see which sounds to mute/unmute
    //delays one second to make sure a time is loaded in
    setTimeout(function() {
        /*seeks and plays from songCount */
        var id = terminusDrums.play();
        terminusDrums.seek(songCount, id);
        var id = terminusVox.play();
        terminusVox.seek(songCount, id);
        var id = terminusRhythm.play();
        terminusRhythm.seek(songCount, id);
        var id = terminusLead.play();
        terminusLead.seek(songCount, id);
        var id = terminusSynth.play();
        terminusSynth.seek(songCount, id);
        var id = terminusBass.play();
        terminusBass.seek(songCount, id);
    }, 1000);
};