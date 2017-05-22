function playSound(e){
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	
	if(!audio) return; // stop function if no audio

	audio.currentTime = 0; // to play sound from start immediately with a fast click
	audio.play();

	key.classList.add('playing');
}

function removeTransition(e){
	this.classList.remove('playing');
}


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);