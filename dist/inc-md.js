// assumed https://cdn.jsdelivr.net/npm/showdown is loaded

var loc = document.location.toString();
    loc = loc.replace(/#.*/,'');

var request = new XMLHttpRequest();
var url = document.getElementsByClassName('include')[0].href;
    if ( url.match(/#$/) ) {
      var p = url.lastIndexOf('/') + 1;
      var d = url.lastIndexOf('.');
      url = url.substring(p,d) + '.md';
      var elems = document.getElementsByClassName('include');
      elems[0].innerHTML = url;
      for(var i=0; i<elems.length; i++) {
        elems[i].href = url;
      }
    }
    request.open('GET', url);
    request.send();

    request.onload = function () {
       resp = request.response.toString()
          if (document.location.href.match(/\.htm#md/) ) {
             document.getElementById('md').innerHTML = resp;
          }
          buf = resp.replace(/\\\n/g,'<br>');
          buf = buf.replace(/%url%/g,loc);
          buf = buf.replace(/%domain%/g,document.location.hostname);
          buf = buf.replace(/%origin%/g,document.location.origin);
          //buf = buf.replace(/%md5%/g,e.getAttribute('md5'));
          buf = buf.replace(/{{DUCK}}/g,'http://duckduckgo.com/?q');

          if (! document.location.href.match(/#/) ) {
            if ( typeof(showdown) == 'undefined' ) {
              document.getElementById('rendered').innerHTML = "/!\\ showdown not loaded";
            } else {
             var converter = new showdown.Converter();
             document.getElementById('rendered').innerHTML = converter.makeHtml(buf);
             document.getElementById('md').style.display = 'none';
           }
          }
    }

