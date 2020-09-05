/*!
 * Made by Tuhin Kanti Pal
 * Visit https://tu.hin.life
 */

function firstF() {
	var songname = document.getElementById("search").value;
	var resa = songname.replace(" ", "+");
	var resb = resa.replace(" ", "+");
	var resc = resb.replace(" ", "+");
	var resd = resc.replace(" ", "+");
	var rese = resd.replace(" ", "+");
	var resf = rese.replace(" ", "+");
	var resg = resf.replace(" ", "+");
	var resh = resg.replace(" ", "+");
	var resi = resh.replace(" ", "+");
	var resj = resi.replace(" ", "+");
	document.getElementById("firsts").style.display = "none";
	document.getElementById("footer").style.display = "none";
	document.getElementById("loads").style.display = "block";
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

	getJSON('https://api.musicder.tk/?query=' + resj, function (err, data) {

		if (err != null) {
			console.error(err);
		} else {
			document.getElementById("loads").style.display = "none";
			document.getElementById("seconds").style.display = "block";
			document.getElementById("footer").style.display = "block";

			var tempone = `${data[0]}`;
			var temptwo = `${data[1]}`;
			var tempthree = `${data[2]}`;
			var tempfour = `${data[3]}`;
			var tempfive = `${data[4]}`;


			if (tempone === "undefined") {
				document.getElementById("errresult").style.display = "block";
				document.getElementById("sfirst").style.display = "none";
			} else {
				document.getElementById("errresult").style.display = "none";
				var songnameone = `${data[0].song}`;
				var albumone = `${data[0].album}`;
				var imageone = `${data[0].image}`;
				var linkone = `${data[0].media_url}`;
				var artistone = `${data[0].singers}`;
				document.getElementById("tu").innerHTML = "<h1 class='headingtwo'>" + songnameone + "</h1><br><p class='parag'>" + artistone + "</p><br><p class='parag'> Album : " + albumone + "</p>";
				document.getElementById("imageone").src = imageone;
				document.getElementById("dldone").href = linkone;
				document.getElementById("dldone").download = songnameone + ".mp3";
			}


			if (temptwo === "undefined") {
				document.getElementById("ssecond").style.display = "none";
			} else {
				var songnametwo = `${data[1].song}`;
				var albumtwo = `${data[1].album}`;
				var imagetwo = `${data[1].image}`;
				var linktwo = `${data[1].media_url}`;
				var artisttwo = `${data[1].singers}`;
				document.getElementById("hin").innerHTML = "<h1 class='headingtwo'>" + songnametwo + "</h1><br><p class='parag'>" + artisttwo + "</p><br><p class='parag'> Album : " + albumtwo + "</p>";
				document.getElementById("imagetwo").src = imagetwo;
				document.getElementById("dldtwo").href = linktwo;
				document.getElementById("dldtwo").download = songnametwo + ".mp3";
			}


			if (tempthree === "undefined") {
				document.getElementById("sthird").style.display = "none";
			} else {
				var songnamethree = `${data[2].song}`;
				var albumthree = `${data[2].album}`;
				var imagethree = `${data[2].image}`;
				var linkthree = `${data[2].media_url}`;
				var artistthree = `${data[2].singers}`;
				document.getElementById("life").innerHTML = "<h1 class='headingtwo'>" + songnamethree + "</h1><br><p class='parag'>" + artistthree + "</p><br><p class='parag'> Album : " + albumthree + "</p>";
				document.getElementById("imagethree").src = imagethree;
				document.getElementById("dldthree").href = linkthree;
				document.getElementById("dldthree").download = songnamethree + ".mp3";
			}


			if (tempfour === "undefined") {
				document.getElementById("sfourth").style.display = "none";
			} else {
				var songnamefour = `${data[3].song}`;
				var albumfour = `${data[3].album}`;
				var imagefour = `${data[3].image}`;
				var linkfour = `${data[3].media_url}`;
				var artistfour = `${data[3].singers}`;
				document.getElementById("iamtuhin").innerHTML = "<h1 class='headingtwo'>" + songnamefour + "</h1><br><p class='parag'>" + artistfour + "</p><br><p class='parag'> Album : " + albumfour + "</p>";
				document.getElementById("imagefour").src = imagefour;
				document.getElementById("dldfour").href = linkfour;
				document.getElementById("dldfour").download = songnamefour + ".mp3";
			}

			if (tempfive === "undefined") {
				document.getElementById("sfifth").style.display = "none";
			} else {
				var songnamefive = `${data[4].song}`;
				var albumfive = `${data[4].album}`;
				var imagefive = `${data[4].image}`;
				var linkfive = `${data[4].media_url}`;
				var artistfive = `${data[4].singers}`;
				document.getElementById("ga").innerHTML = "<h1 class='headingtwo'>" + songnamefive + "</h1><br><p class='parag'>" + artistfive + "</p><br><p class='parag'> Album : " + albumfive + "</p>";
				document.getElementById("imagefive").src = imagefive;
				document.getElementById("dldfive").href = linkfive;
				document.getElementById("dldfive").download = songnamefive + ".mp3";
			}
		}
	});
}
window.addEventListener('keydown', function (e) {
	if (e.keyIdentifier == 'U+000A' || e.keyIdentifier == 'Enter' || e.keyCode == 13) {
		if (e.target.nodeName == 'INPUT' && e.target.type == 'text') {
			e.preventDefault();
			return false;
		}
	}
}, true);
document.addEventListener('contextmenu', event => event.preventDefault());

/*!
 * Made by Tuhin Kanti Pal
 * Visit https://tu.hin.life
 */