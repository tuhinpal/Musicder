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
		var link = data.tuhinr.tuhindownloadlink;
		document.title = "Download " + songname;
		document.getElementById("songname").innerHTML = "Download " + songname;
		document.getElementById("qone").href = link;
		var linkosz = link.replace("_96", "_160");
		document.getElementById("qtwo").href = linkosz;
		var linkttz = link.replace("_96", "_320");
		document.getElementById("qthree").href = linkttz;
	}
};
xmlhttp.open("GET", "https://dldapi.musicder.tk/?pids=" + id, true);
xmlhttp.send();

/*!
 * Made by Tuhin Kanti Pal
 * No More using Jiosaavn API by Sumanjay, Musicder is now fetch every Details from jiosaavn.com (Proxied using cloudflare worker)
 * Visit https://tu.hin.life
 */