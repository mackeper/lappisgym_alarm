function getKeyValue(str) {
	var re = /\d+/g;
	var arr = str.match(re);

	return arr;
}

function checkKey() {
	var divHTML = $('#maincontent > div > div > div.col-md-4 > p:nth-child(3)');
	var keys = getKeyValue(divHTML.text());

	if(parseInt(keys[1]) != 0) {
		console.log("Keys!!!! " + keys[1]);
		playAlarm();
	} else {
		console.log("no keys :( " + keys[1]);
		setTimeout(reloadPage, 10000);
	}
}

function reloadPage() {
	console.log("Refresh");
	location.reload(true);
}

function playAlarm() {
	var myAudio = new Audio();        // create the audio object
	myAudio.src = "http://soundbible.com/mp3/old-fashioned-school-bell-daniel_simon.mp3"; // assign the audio file to its src
	myAudio.volume = 0.3;
	myAudio.addEventListener('ended', function() {
		this.currentTime = 0;
		this.play();
	}, false);
	myAudio.play();                   // play the music
	console.log("Alarm!!!");
}

checkKey();