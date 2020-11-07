/*!
 * Made by Tuhin Kanti Pal
 * Using Own Jiosaavn API  https://github.com/cachecleanerjeet/jiosaavnapi
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
        var data = JSON.parse(this.responseText);
        document.getElementById('loads').style.display = 'none';
        document.title = "Playing " + data.song;
        document.getElementById("songname").innerHTML = data.song;
        document.getElementById("songimage").src = data.image;
        document.getElementById("songby").innerHTML = data.singers;
        document.getElementById("songplay").innerHTML = `<audio id="audiocontrols" controls><source src="${data.media_url}" type="audio/mp3" /></audio>`;
        // Media Session API
        if ('mediaSession' in navigator) {
            navigator.mediaSession.metadata = new MediaMetadata({
                title: data.song,
                artist: data.singers,
                album: data.album,
                artwork: [{
                    src: data.image,
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
        };
        //lyrics
        if (data.has_lyrics == "true") {
            var xhr = new XMLHttpRequest();
            xhr.addEventListener("readystatechange", function() {
                if (this.readyState === 4) {
                    var ldata = JSON.parse(this.responseText);
                    document.getElementById("lyrics").innerHTML = ldata.lyrics;
                }
            });
            xhr.open("GET", "https://songapi.thetuhin.com/lyrics?id=" + songid);
            xhr.send();
        } else {
            document.getElementById('lyricsinit').style.visibility = 'hidden';
        };
    };
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