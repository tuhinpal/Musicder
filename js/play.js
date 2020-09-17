/*!
 * Made by Tuhin Kanti Pal
 * This Section is Not using Jiosaavn Unofficial API by Sumanjay anymore
 * Visit https://tu.hin.life
 */

//get data from parameters
let params = new URLSearchParams(location.search);
var songid = params.get('id');
var songn = params.get('n');


//fetch data from api
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var datarawo = (this.responseText);
        var dataraw = datarawo.replace(songid, 'tuhinr');
        document.getElementById('content').style.display = 'block';
        document.getElementById('footer').style.display = 'block';
        document.getElementById('matha').style.display = 'block';
        document.getElementById('loads').style.display = 'none';
        var data = JSON.parse(dataraw);
        var songname = data.tuhinr.song;
        var artist = data.tuhinr.singers;
        var album = data.tuhinr.album;
        var songimagesmall = data.tuhinr.image;
        var songimage = songimagesmall.replace("150x150", "500x500");
        var audiolinkget = data.tuhinr.media_preview_url;
        var audiolinkr = audiolinkget.replace("preview.saavncdn.com", "aac.saavncdn.com");
        var audiolink = audiolinkr.replace("96_p", "96");
        var has_lyrics = data.tuhinr.has_lyrics;
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
                        src: songimagesmall,
                        sizes: '150x150',
                        type: 'image/png'
                    },
                    {
                        src: songimage,
                        sizes: '500x500',
                        type: 'image/png'
                    },
                ]
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
            lyricsinit("https://lyrics.musicder.tk/?lyrics_id=" + lyricsid, function(n, e) {
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
xmlhttp.open("GET", "https://songapi.musicder.tk/?pids=" + songid, true);
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
 * This Section is Not using Jiosaavn Unofficial API by Sumanjay anymore
 */