/*!
 * Made by Tuhin Kanti Pal
 * Using Own Jiosaavn API  https://github.com/cachecleanerjeet/jiosaavnapi
 * Visit https://tu.hin.life
 */

//get data from parameters
let params = new URLSearchParams(location.search);
var songid = params.get('id');
var songn = params.get('n');

function visualTimer() {
    document.getElementById('loads').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    document.getElementById('footer').style.display = 'block';
    document.getElementById('matha').style.display = 'block';
}

//fetch data from api
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var dataraw = (this.responseText);
        var data = JSON.parse(dataraw);
        var visual = setInterval(visualTimer, 800);
        var data = JSON.parse(dataraw);
        var songname = data.song;
        var artist = data.singers;
        var album = data.album;
        var has_lyrics = data.has_lyrics;
        var songimage = data.image;
        var audiolink = data.media_url;
        document.title = "Playing " + songname;
        document.getElementById("songname").innerHTML = songname;
        document.getElementById("songimage").src = songimage;
        document.getElementById("songby").innerHTML = artist;
        document.getElementById("songplay").innerHTML = "<audio id='audiocontrols' controls><source src='" + audiolink + "' type='audio/mp3' /></audio>";
        // Media Session API
        if ('mediaSession' in navigator) {
            navigator.mediaSession.metadata = new MediaMetadata({
                title: songname,
                artist: artist,
                album: album,
                artwork: [{
                    src: songimage,
                    sizes: '500x500',
                    type: 'image/png'
                }, ]
            });
            navigator.mediaSession.setActionHandler('play', function() {
                audiocontrols.play();
            });
            navigator.mediaSession.setActionHandler('pause', function() {
                audiocontrols.pause();
            });
        }
        //lyrics
        if (has_lyrics == "true") {
            var lyricsid = songid;
            //lyrics fetch
            var lyricsinit = function(n, e) {
                var s = new XMLHttpRequest;
                s.open("GET", n, !0), s.responseType = "json", s.onload = function() {
                    var n = s.status;
                    200 == n ? e(null, s.response) : e(n)
                }, s.send()
            };
            //this is the lyrics api
            lyricsinit("https://songapi.thetuhin.com/lyrics?id=" + lyricsid, function(n, e) {
                if (null != n) console.error(n);
                else {
                    var s = `${e.lyrics}`;
                    document.getElementById("lyrics").innerHTML = s
                }
            });
        } else {
            document.getElementById('lyricsinit').style.visibility = 'hidden';
        }
    }
};
//this is the song detail api
xmlhttp.open("GET", "https://songapi.thetuhin.com/song?id=" + songid, true);
xmlhttp.send();

//when lyricsask tapped lyrics will shown (if lyrics available)
function lyricsS() {
    document.getElementById('lyricsdiv').style.display = 'block';
    document.getElementById('lyricsinit').style.visibility = 'hidden';
}

//webshare api
function share() {
    if (navigator.share) {
        navigator.share({
                title: 'Share | Musicder',
                text: "Listen " + songn + " on Musicder." + "\n\n👉",
                url: window.location.href
            }).then(() => {
                console.log('Thanks for Sharing!');
            })
            .catch(err => {
                console.log(`Couldn't share because of`, err.message);
            });
    } else {
        console.log('Web Share is not Supported');
    }
}

/*!
 * Made by Tuhin Kanti Pal
 * Visit https://tu.hin.life
 * Using Own Jiosaavn API  https://github.com/cachecleanerjeet/jiosaavnapi
 */