/********** KEY INTERACTIONS **********/

/* KEY - Q */

document.addEventListener("keydown", function(event) {
    if (event.key === "q") { 
        document.getElementById("tom").classList.add("active");
    }
});

document.addEventListener("keyup", function(event) {
    if (event.key === "q") {
        document.getElementById("tom").classList.remove("active");
    }
});


/* KEY - W */

document.addEventListener("keydown", function(event) {
    if (event.key === "w") { 
        document.getElementById("boom").classList.add("active");
    }
});

document.addEventListener("keyup", function(event) {
    if (event.key === "w") {
        document.getElementById("boom").classList.remove("active"); 
    }
});


/* KEY - E */

document.addEventListener("keydown", function(event) {
    if (event.key === "e") { 
        document.getElementById("clap").classList.add("active");
    }
});

document.addEventListener("keyup", function(event) {
    if (event.key === "e") {
        document.getElementById("clap").classList.remove("active"); 
    }
});


/* KEY - R */

document.addEventListener("keydown", function(event) {
    if (event.key === "r") { 
        document.getElementById("hihat").classList.add("active");
    }
});

document.addEventListener("keyup", function(event) {
    if (event.key === "r") {
        document.getElementById("hihat").classList.remove("active"); 
    }
});


/* KEY - T */

document.addEventListener("keydown", function(event) {
    if (event.key === "t") { 
        document.getElementById("kick").classList.add("active");
    }
});

document.addEventListener("keyup", function(event) {
    if (event.key === "t") {
        document.getElementById("kick").classList.remove("active"); 
    }
});


/* KEY - Y */

document.addEventListener("keydown", function(event) {
    if (event.key === "y") { 
        document.getElementById("openhat").classList.add("active");
    }
});

document.addEventListener("keyup", function(event) {
    if (event.key === "y") {
        document.getElementById("openhat").classList.remove("active"); 
    }
});


/* KEY - U */

document.addEventListener("keydown", function(event) {
    if (event.key === "u") { 
        document.getElementById("ride").classList.add("active");
    }
});

document.addEventListener("keyup", function(event) {
    if (event.key === "u") {
        document.getElementById("ride").classList.remove("active"); 
    }
});


/* KEY - I */

document.addEventListener("keydown", function(event) {
    if (event.key === "ı") { 
        document.getElementById("snare").classList.add("active");
    }
});

document.addEventListener("keyup", function(event) {
    if (event.key === "ı") {
        document.getElementById("snare").classList.remove("active"); 
    }
});


/* KEY - O */

document.addEventListener("keydown", function(event) {
    if (event.key === "o") { 
        document.getElementById("tink").classList.add("active");
    }
});

document.addEventListener("keyup", function(event) {
    if (event.key === "o") {
        document.getElementById("tink").classList.remove("active"); 
    }
});


/********************************************************************/


/* SOUNDS */

const sounds = {
    "q": "assets/sounds/tom.wav",
    "w": "assets/sounds/boom.wav",
    "e": "assets/sounds/clap.wav",
    "r": "assets/sounds/hihat.wav",
    "t": "assets/sounds/kick.wav",
    "y": "assets/sounds/openhat.wav",
    "u": "assets/sounds/ride.wav",
    "ı": "assets/sounds/snare.wav",
    "o": "assets/sounds/tink.wav",
};

document.addEventListener("keydown", function(event) {
    if (sounds[event.key]) {
        let audio = new Audio(sounds[event.key]);
        audio.volume = 0.2; 
        audio.play();
    }
});
