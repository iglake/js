
var url = document.location.href;
var host = document.location.host;
let domain = document.location.hostname.replace(/www\./,'');
var loc = document.location.toString();
    loc = loc.replace(/#.*/,'');
var fragment = window.location.hash.substring(1);
let email = 'info@'+domain;

var body = document.getElementsByTagName('body')[0];
var buf = body.innerHTML.replace(/%url%/g,url);
    buf = buf.replace(/%domain%/g,document.location.hostname);
    buf = buf.replace(/%origin%/g,document.location.origin);

    buf = buf.replace('%host%',host);
    buf = buf.replace('%loc%',loc);
    buf = buf.replace('%fragment%',fragment);
    buf = buf.replace(/%email%/g,email);
    buf = buf.replace(/%email%/g,email);
    buf = buf.replace(/%search%/g,'https://duckduckgo.com/?q');

//console.log('buf: '+buf);
document.body.innerHTML = buf;
