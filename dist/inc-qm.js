// assumed https://cdn.jsdelivr.net/npm/showdown is loaded
/* 
  use URL to compute a "mutable" hash
  and fetch content from IPFS (/web/domain.tdl/path/file.md)
*/

var request = new XMLHttpRequest();

var url = document.getElementsByClassName('source')[0].href;
//  var hash = window.location.hash.slice(1);
    if ( url.match(/#/) ) {
      var hash = url.substring(url.indexOf('#')+1);
      console.log('hash='+hash)
      url = 'http://127.0.0.1:8080/ipfs/'+ hash;
      var elems = document.getElementsByClassName('source');
      elems[0].innerHTML = 'GET '+url;
      for(var i=1; i<elems.length; i++) {
        elems[i].href = url;
      }
    }
    request.open('GET', url);
    request.send();

    request.onload = function () {
       resp = request.response.toString()
          if (document.location.href.match(/\.htm#qm/) ) {
             document.getElementById('source').src = resp;
          }
          buf = resp.replace(/\\\n/g,'<br>');
          if (! document.location.href.match(/#/) ) {
            if ( typeof(showdown) == 'undefined' ) {
              document.getElementById('rendered').innerHTML = "/!\\ showdown not loaded";
            } else {
             var converter = new showdown.Converter();
             document.getElementById('rendered').innerHTML = converter.makeHtml(buf);
           }
          }
    }

