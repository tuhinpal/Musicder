/*!
 * Made by Tuhin Kanti Pal
 * Visit https://tu.hin.life
 */

let params = new URLSearchParams(location.search);
var songid = params.get('id');
var sharename = params.get('n');

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
getJSON('https://api.musicder.tk/?query=https://www.jiosaavn.com/song/' + songid, function (err, data) {
	if (err != null) {
		console.error(err);
	} else {
		document.getElementById('content').style.display = 'block';
		document.getElementById('footer').style.display = 'block';
		document.getElementById('matha').style.display = 'block';
		document.getElementById('loads').style.display = 'none';
		var songname = `${data.song}`;
		var artist = `${data.singers}`;
		var songimage = `${data.image}`;
		var audiolinkhq = `${data.media_url}`;
		var audiolink = audiolinkhq.replace("_320", "_96");
		var has_lyrics = `${data.has_lyrics}`;
		document.title = "Playing " + songname;
		document.getElementById("songname").innerHTML = songname;
		document.getElementById("songimage").src = songimage;
		document.getElementById("songby").innerHTML = artist;
		document.getElementById("songplay").innerHTML = "<audio controls><source src='" + audiolink + "' type='audio/mp3' /></audio>";
		if (has_lyrics == "true") {
			document.getElementById("lyricsinit").style.visibility = "visible";
			var lyricsid = `${data.id}`;

			//lyrics

			var lyricsinit = function (url, callback) {

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

			lyricsinit('https://lyrics.musicder.tk/?lyrics_id=' + lyricsid, function (err, getlyrics) {

				if (err != null) {
					console.error(err);
				} else {

					var lyrics = `${getlyrics.lyrics}`;
					document.getElementById("lyrics").innerHTML = lyrics;
				}
			});


		} else {


		}
	}
});

function share() {
	if (navigator.share) {
		navigator.share({
				title: 'Share | Musicder',
				text: "Listen " + sharename + " on Musicder." + "\n\n👉",
				url: window.location.href
			}).then(() => {
				console.log('Thanks for sharing!');
			})
			.catch(err => {
				console.log(`Couldn't share because of`, err.message);
			});
	} else {
		console.log('web share not supported');
	}
}

/*!
 * Made by Tuhin Kanti Pal
 * Visit https://tu.hin.life
 */