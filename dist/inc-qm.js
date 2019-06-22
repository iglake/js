// assumed https://cdn.jsdelivr.net/npm/showdown is loaded

var request = new XMLHttpRequest();

var url = document.getElementsByClassName('source')[0].src;
    if ( url.match(/#$/) ) {
      var p = url.lastIndexOf('/') + 1;
      var d = url.lastIndexOf('.');
      url = url.substring(p,d) + '.md';
      var elems = document.getElementsByClassName('source');
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
             document.getElementById('source').src = resp;
          }
          buf = resp.replace(/\\\n/g,'<br>');
          if (! document.location.href.match(/#/) ) {
            if ( typeof(showdown) == 'undefined' ) {
              document.getElementById('rendered').innerHTML = "/!\\ showdown not loaded";
            } else {
             var converter = new showdown.Converter();
             document.getElementById('rendered').innerHTML = converter.makeHtml(buf);
             document.getElementById('source').style.display = 'none';
           }
          }
    }

