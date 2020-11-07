/*!
 * Made by Tuhin Kanti Pal
 * Using Own Jiosaavn API  https://github.com/cachecleanerjeet/jiosaavnapi
 * Visit https://tu.hin.life
 */

function searchF() {
    var songquery = document.getElementById("search").value.replace(/ /g, "+");
    document.getElementById("firsts").style.display = "none";
    document.getElementById("footer").style.display = "block";
    document.getElementById("loads").style.display = "block";

    var search = new XMLHttpRequest();
    search.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            document.getElementById("loads").style.display = "none";
            document.getElementById("seconds").style.display = "block";

            var data = JSON.parse(this.responseText);

            if (data[0] == undefined) {
                document.getElementById("errresult").style.display = "block";
                document.getElementById("sfirst").style.display = "none";
            } else {
                document.getElementById("errresult").style.display = "none";
                document.getElementById("sonec").innerHTML = `<h1 class="headingtwo">${data[0].title}</h1><br><p class="parag">${data[0].more_info.singers}<br><br>Album : ${data[0].album}</p>`;
                document.getElementById("imageone").src = data[0].image;
                document.getElementById("dldone").href = `download/?id=${data[0].id}`;
                document.getElementById("playone").href = `play/?id=${data[0].id}&n=${data[0].title}`;
            }


            if (data[1] == undefined) {
                document.getElementById("ssecond").style.display = "none";
            } else {
                document.getElementById("stwoc").innerHTML = `<h1 class="headingtwo">${data[1].title}</h1><br><p class="parag">${data[1].more_info.singers}<br><br>Album : ${data[1].album}</p>`;
                document.getElementById("imagetwo").src = data[1].image;
                document.getElementById("dldtwo").href = `download/?id=${data[1].id}`;
                document.getElementById("playtwo").href = `play/?id=${data[1].id}&n=${data[1].title}`;
            }


            if (data[2] == undefined) {
                document.getElementById("sthird").style.display = "none";
            } else {
                document.getElementById("sthreec").innerHTML = `<h1 class="headingtwo">${data[2].title}</h1><br><p class="parag">${data[2].more_info.singers}<br><br>Album : ${data[2].album}</p>`;
                document.getElementById("imagethree").src = data[2].image;
                document.getElementById("dldthree").href = `download/?id=${data[2].id}`;
                document.getElementById("playthree").href = `play/?id=${data[2].id}&n=${data[2].title}`;
            }


            if (data[3] == undefined) {
                document.getElementById("sfourth").style.display = "none";
            } else {
                document.getElementById("sfourc").innerHTML = `<h1 class="headingtwo">${data[3].title}</h1><br><p class="parag">${data[3].more_info.singers}<br><br>Album : ${data[3].album}</p>`;
                document.getElementById("imagefour").src = data[3].image;
                document.getElementById("dldfour").href = `download/?id=${data[3].id}`;
                document.getElementById("playfour").href = `play/?id=${data[3].id}&n=${data[3].title}`;
            }

            if (data[4] == undefined) {
                document.getElementById("sfifth").style.display = "none";
            } else {
                document.getElementById("sfivec").innerHTML = `<h1 class="headingtwo">${data[4].title}</h1><br><p class="parag">${data[4].more_info.singers}<br><br>Album : ${data[4].album}</p>`;
                document.getElementById("imagefive").src = data[4].image;
                document.getElementById("dldfive").href = `download/?id=${data[4].id}`;
                document.getElementById("playfive").href = `play/?id=${data[4].id}&n=${data[4].title}`;
            }
        }
    });

    search.open("GET", "https://songapi.thetuhin.com/search?query=" + songquery);
    search.send();
}


window.addEventListener('keydown', function(e) {
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
 * Using Own Jiosaavn API  https://github.com/cachecleanerjeet/jiosaavnapi
 * Visit https://tu.hin.life
 */