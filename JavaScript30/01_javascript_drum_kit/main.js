window.addEventListener('load', init);

function init() {
	window.addEventListener('keydown', playSound);

	const divs = Array.from(document.querySelectorAll('.key'));
	divs.forEach(function(div) {
		div.addEventListener('transitionend', removeTransition);
	})

}

function playSound(event) {
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	if (!audio) {
		return;
	}
	const div = document.querySelector(`div[data-key="${event.keyCode}"]`);
	div.classList.add('playing');
	audio.currentTime = 0;
	audio.play();
}

function removeTransition(event) {
	if (event.propertyName !== "transform") {
		return;
	}
	event.target.classList.remove('playing');
}