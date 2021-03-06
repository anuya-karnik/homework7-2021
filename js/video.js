var video = document.querySelector("#player1");

window.addEventListener("load", function () {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	video.play();
	document.querySelector('#volume').innerHTML = (video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
	console.log("Slow Down Video");
	video.playbackRate *= .95;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function () {
	console.log("Speed Up Video");
	video.playbackRate /= .95;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function () {
	console.log("Skip Ahead 15 Seconds");
	video.currentTime += 15;
	if(video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Skipped ahead to " + video.currentTime);
});


document.querySelector("#slider").addEventListener("click", function () {
	console.log("Changing Volume");
	console.log(this.value);
	video.volume = (this.value) / 100;
	document.querySelector('#volume').innerHTML = (video.volume * 100) + "%";
});

document.querySelector("#mute").addEventListener("click", function () {
	if(video.muted) {
		console.log("Unmute Video");
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute"
	}
	else {
		console.log("Mute Video")
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute"
	}
});


document.querySelector("#vintage").addEventListener("click", function () {
	console.log("Change CSS");
	video.classList.add("oldSchool");	
});

document.querySelector("#orig").addEventListener("click", function () {
	console.log("Change CSS");
	video.classList.remove("oldSchool");	
});


