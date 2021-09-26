function repeat(audioId) {
    let audioElement = document.getElementById(audioId)
    let repeatElement = document.getElementById(audioId + '_repeat')
    if (audioElement.getAttribute('loop') == null) {
        audioElement.setAttribute('loop', 'true');
        repeatElement.classList.remove('repeat');
        repeatElement.classList.add('repeat-active');
        return;
    }
    audioElement.removeAttribute('loop');
    repeatElement.classList.add('repeat');
    repeatElement.classList.remove('repeat-active');
}