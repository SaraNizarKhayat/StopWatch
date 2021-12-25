let s = 0; //seconds
let m = 0; //minutes
let h = 0; //hours

let ds = 0; // display seconds
let dm = 0; // display minutes
let dh = 0; // display hours

let interval = null;
let status = "stopped";

function stopWatch() {
    s++;
    if (s / 60 === 1) {
        s = 0;
        m++;
        if (m / 60 === 1)
            m = 0;
        h++;
    }
    if (s < 10) {
        ds = "0" + s.toString();
    } else {
        ds = s;
    }
    if (m < 10) {
        dm = "0" + m.toString();
    } else {
        dm = m;
    }
    if (h < 10) {
        dh = "0" + h.toString();
    } else {
        dh = h;
    }

    document.getElementById("display").innerHTML = dh + " : " + dm + " : " + ds;
}

function startStop() {
    if (status === "stopped") {
        interval = window.setInterval(stopWatch, 100);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";
    } else {
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";
    }
}

function reset() {
    window.clearInterval(interval);
    s = 0;
    m = 0;
    h = 0;
    document.getElementById("display").innerHTML = " 00 : 00 : 00";
    document.getElementById("startStop").innerHTML = "Start";


}