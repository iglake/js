
var request = new XMLHttpRequest();
var loc = document.location.toString();
    loc = loc.replace(/#.*/,'');

var url = document.getElementsByClassName('include')[0].href;
    if ( url.match(/#$/) ) {
      var p = url.lastIndexOf('/') + 1;
      var d = url.lastIndexOf('.');
      url = url.substring(p,d) + '.txt';
      var elems = document.getElementsByClassName('include');
      elems[0].innerHTML = url;
      for(var i=0; i<elems.length; i++) {
        elems[i].href = url;
      }
    }
    request.open('GET', url);
    request.send();

var script = document.createElement('script');
    script.setAttribute('type','text/javascript');
    script.src = '/js/showdown.min.js';
    script.src = 'https://cdn.jsdelivr.net/npm/showdown';

    request.onload = function () {
       resp = request.response.toString()
          if (document.location.href.match(/\.htm#md/) ) {
             document.getElementById('md').innerHTML = resp;
          }

       document.getElementsByTagName("head")[0].appendChild(script);
       script.onload = function () {
          buf = resp.replace(/\\\n/g,'<br>');
          buf = buf.replace('%loc%',loc);
          buf = buf.replace('%url%',url);
          buf = buf.replace(/%domain%/g,document.location.hostname);
          buf = buf.replace(/%origin%/g,document.location.origin);
          buf = buf.replace(/{{DUCK}}/g,'http://duckduckgo.com/?q');

          if (! document.location.href.match(/#/) ) {
             var converter = new showdown.Converter();
             document.getElementById('rendered').innerHTML = converter.makeHtml(buf);
             document.getElementById('md').style.display = 'none';
          }
       }
       if ( typeof(showdown) == 'undefined' ) {
         document.getElementById('rendered').innerHTML = "/!\\ markdown not loaded";
       }
       // script.onreadystatechange = function () { }
    }

function toggle(id) {
    var obj = document.getElementById(id);
    obj.style.display = (obj.style.display == "none") ? "block" : "none";
}
