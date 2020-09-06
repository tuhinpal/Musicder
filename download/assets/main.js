/*!
 * Made by Tuhin Kanti Pal
 * Visit https://tu.hin.life
 */

let params = new URLSearchParams(location.search);
var name = params.get('n');
var lnk = params.get('link');

document.getElementById("songname").innerHTML = "Download " + name;
document.title = "Download  " + name;

//96 kbps replace
var ninesix = lnk.replace("320", "96") ;
document.getElementById("qone").href = ninesix ;

//128 kbps replace
var onetwoeight = lnk.replace("320", "160") ;
document.getElementById("qtwo").href = onetwoeight ;

//320 kbps
document.getElementById("qthree").href = lnk ;

/*!
 * Made by Tuhin Kanti Pal
 * Visit https://tu.hin.life
 */