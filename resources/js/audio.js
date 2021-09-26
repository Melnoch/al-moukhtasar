let audio;
function play(audioId) {
    if (audio != null) {
        audio.pause();
    }
    audio = new Audio();
    audio.play();
    audio = document.getElementById(audioId);
    audio.play();
}