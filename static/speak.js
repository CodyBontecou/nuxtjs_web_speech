var synth = window.speechSynthesis;
var voices = [];

function populateVoiceList() {
    voices = synth.getVoices().sort(function (a, b) {
        var aname = a.name.toUpperCase(), bname = b.name.toUpperCase();
        if (aname < bname)
            return -1;
        else if (aname == bname)
            return 0;
        else
            return +1;
    });
}

populateVoiceList();

function speak(word, recognition) {
    var utterThis = new SpeechSynthesisUtterance(word);
    utterThis.onend = function (event) {
        recognition.start(); // I don't think recognition and speak should be intertwined like this.
    };
    utterThis.voice = voices[0];
    synth.speak(utterThis);
}
