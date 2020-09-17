/*!
 * Made by Tuhin Kanti Pal
 * No More using Jiosaavn API by Sumanjay, Musicder is now fetch every Details from jiosaavn.com (Proxied using cloudflare worker)
 * Visit https://tu.hin.life
 */

let params = new URLSearchParams(location.search);
var id = params.get('id');

document.getElementById("songname").innerHTML = "Download " + name;


var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		var datarawo = (this.responseText);
		var dataraw = datarawo.replace(id, 'tuhinr');
		document.getElementById('content').style.display = 'block';
		document.getElementById('loads').style.display = 'none';
		var data = JSON.parse(dataraw);
		var songname = data.tuhinr.song;
		var linkr = data.tuhinr.tuhindownloadlink;
		var link = linkr.replace("https://", "/");
		document.title = "Download " + songname;
		document.getElementById("songname").innerHTML = "Download " + songname;

		//96 kbps
		document.getElementById("qone").href = link;
		document.getElementById("qone").target = "_self";
		document.getElementById("qone").download = songname + ".mp3";

		//128 kbps
		var linkosz = link.replace("_96", "_160");
		document.getElementById("qtwo").href = linkosz;
		document.getElementById("qtwo").target = "_self";
		document.getElementById("qtwo").download = songname + ".mp3";

		//320 kbps
		var linkttz = link.replace("_96", "_320");
		document.getElementById("qthree").href = linkttz;
		document.getElementById("qthree").target = "_self";
		document.getElementById("qthree").download = songname + ".mp3";
	}
};
xmlhttp.open("GET", "https://dldapi.musicder.tk/?pids=" + id, true);
xmlhttp.send();

/*!
 * Made by Tuhin Kanti Pal
 * No More using Jiosaavn API by Sumanjay, Musicder is now fetch every Details from jiosaavn.com (Proxied using cloudflare worker)
 * Visit https://tu.hin.life
 */