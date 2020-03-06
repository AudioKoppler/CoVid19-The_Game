function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("controls", "none");
    this.sound.setAttribute("loop", "loop");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
};


var myMusic = new sound("sound/ResidentEvil(CorpUmbrella).mp3");

/*VIRUS MOUSEOVER SOUND */

function playMers() {
    var audio = new Audio("sound/mers.mp3")
    audio.play();
}

function playSars() {
    var audio = new Audio("sound/sars.mp3")
    audio.play();
}

function playFerret() {
    var audio = new Audio("sound/Ferrit.mp3")
    audio.play();
}

function stopFerret() {
    var audio = new Audio("sound/Ferrit.mp3")
    audio.stop();
}

function playCovid19() {
    var audio = new Audio("sound/covid19.mp3")
    audio.play();
}

function playMink() {
    var audio = new Audio("sound/Mink.mp3")
    audio.play();
}