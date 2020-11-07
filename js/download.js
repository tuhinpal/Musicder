/*!
 * Made by Tuhin Kanti Pal
 * Using Own Jiosaavn API  https://github.com/cachecleanerjeet/jiosaavnapi
 * Visit https://tu.hin.life
 */

let params = new URLSearchParams(location.search);
var id = params.get('id');

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var dataraw = (this.responseText);
        var data = JSON.parse(dataraw);
        document.getElementById('loads').style.display = 'none';
        var songname = data.song;
        var linkr = data.media_url;
        var link = linkr.replace("https://aac.saavncdn.com/", "/cdn/");
        document.title = "Download " + songname;
        document.getElementById("songname").innerHTML = "Download " + songname;

        //96 kbps
        document.getElementById("qone").href = link.replace("_160", "_96");
        document.getElementById("qone").target = "_self";
        document.getElementById("qone").download = songname + ".mp3";

        //128 kbps
        document.getElementById("qtwo").href = link;
        document.getElementById("qtwo").target = "_self";
        document.getElementById("qtwo").download = songname + ".mp3";

        //320 kbps
        document.getElementById("qthree").href = link.replace("_160", "_320");
        document.getElementById("qthree").target = "_self";
        document.getElementById("qthree").download = songname + ".mp3";
    }
};
xmlhttp.open("GET", "https://songapi.thetuhin.com/song?id=" + id, true);
xmlhttp.send();

/*!
 * Made by Tuhin Kanti Pal
 * Using Own Jiosaavn API  https://github.com/cachecleanerjeet/jiosaavnapi
 * Visit https://tu.hin.life
 */