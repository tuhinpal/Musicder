/*!
 * Made by Tuhin Kanti Pal
 * Visit https://tu.hin.life
 */

let params = new URLSearchParams(location.search);
var songid = params.get('id');

function lyricsS() {
	document.getElementById('lyricsdiv').style.display = 'block';
	document.getElementById('lyricsinit').style.visibility = 'hidden';
}

var getJSON = function (url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.responseType = 'json';
	xhr.onload = function () {
		var status = xhr.status;
		if (status == 200) {
			callback(null, xhr.response);
		} else {
			callback(status);
		}
	};
	xhr.send();
};
getJSON('https://api.musicder.tk/?query=https://www.jiosaavn.com/song/' + songid + "&lyrics=true", function (err, data) {
	if (err != null) {
		console.error(err);
	} else {
		document.getElementById('content').style.display = 'block';
		document.getElementById('loads').style.display = 'none';
		var songname = `${data.song}`;
		var artist = `${data.singers}`;
		var songimage = `${data.image}`;
		var audiolink = `${data.media_url}`;
		var rawlyrics = `${data.lyrics}`;
		document.title = "Playing " + songname;
		document.getElementById("songname").innerHTML = songname;
		document.getElementById("songimage").src = songimage;
		document.getElementById("songby").innerHTML = artist;
		document.getElementById("songplay").innerHTML = "<audio controls><source src='" + audiolink + "' type='audio/mp3' /></audio>";
		if (rawlyrics == "null") {

		} else {
			document.getElementById("lyricsinit").style.visibility = "visible";
			var lyrics = rawlyrics.replace(/\n/gi, "<br>");
			document.getElementById("lyrics").innerHTML = lyrics;
		}
	}
});

/*!
 * Made by Tuhin Kanti Pal
 * Visit https://tu.hin.life
 */