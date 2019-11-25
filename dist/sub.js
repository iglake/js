
var url = document.location.href;
var host = document.location.host;
var loc = document.location.toString();
    loc = loc.replace(/#.*/,'');
var fragment = window.location.hash.substring(1);
var email = 'info@'+document.location.hostname;

var body = document.getElementsByTagName('body')[0];
var buf = body.innerHTML.replace(/%url%/g,url);
    buf = buf.replace(/%domain%/g,document.location.hostname);
    buf = buf.replace(/%origin%/g,document.location.origin);

    buf = buf.replace('%host%',host);
    buf = buf.replace('%loc%',loc);
    buf = buf.replace('%fragment%',fragment);
    buf = buf.replace(/%email%/g,email);

//console.log('buf: '+buf);
document.body.innerHTML = buf;
