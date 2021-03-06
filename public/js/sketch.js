function setup() {
    noCanvas();
};

function mouseWheel(event) {
    //calls OpenInNewTab() and passes along a target URL and the 1 or -1 value 
    if (event.delta == 1) {
        console.log('scrolling down ' + event.delta);
        //OpenInNewTab('#', event.delta);
    }
    //opens up the next tab in sequence, which here is ../two
    if (event.delta == -1) {
        console.log('scrolling up ' + event.delta);
        OpenInNewTab('two.html', event.delta);
    }
    return false;
}

/* takes in a target URL and a scroll variable and either opens or closes the window */

function OpenInNewTab(url, val) {
    //opens new window
    var win;
    if (val == -1) {
        win = window.open(url, '_blank');
        //win.focus();
    }
    //closes window
    if (val == 1) {
        window.close();
    }
}