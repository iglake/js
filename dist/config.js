/* this js script that the _json.%domain% DNSi TXT record 
   and use it as a map to substitute keywords ...
 */

var hostname = document.location.hostname;
var domain = hostname.replace(/www./,'');
var loc = document.location.toString();
    loc = loc.replace(/#.*/,'');
var fragment = window.location.hash.substring(1);


let e = document.getElementsByClassName('url')[0];
if (typeof(e) != 'undefined') {
  url = e.href;
} else {
  url = 'http://ipfs.blockringtm.ml';
}

if (domain = '127.0.0.1') {
 DNS.Query('_json.blockringtm.ml','TXT', callback('body'))
} else {
 DNS.Query('_json.'+domain,'TXT', callback('body'))
}

function callback(tag) {
   var display = function(json) {
   var map = [];
   console.log(json);
   var rr = json.rr
   for(let i=0; i<rr.length; i++) {
    txt = decode(rr[i]['txtdata']);
    console.log('txt['+i+']='+txt);
    map = JSON.parse(txt);
    console.log(map);
   }
   let bod = document.getElementsByTagName('tag')[0];
   var buf = bod.innerHTML;
       buf = buf.replace(/%url%/g,url);
       buf = buf.replace(/%loc%/g,loc);
       buf = buf.replace(/%domain%/g,domain);
       buf = buf.replace(/%hostname%/g,hostname);
       buf = buf.replace(/%origin%/g,document.location.origin);
       buf = buf.replace(/%fragmetn%/g,fragment);
       buf = buf.replace(/%rr%/g,txt);

   for (let key in map) {
      let rex = RegExp('%'+key+'%','g');
      buf = buf.replace(rex,map[key]);
   }

   bod.innerHTML = buf; // rewrite the body !

   return display
}

function decode(str) {
  return str.replace(/\\(\d{3})/g, function(match, dec) {
				return String.fromCharCode(dec);
	});
}
