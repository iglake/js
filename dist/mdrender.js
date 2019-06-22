

var script = document.createElement('script');
    script.setAttribute('type','text/javascript');
    script.src = 'https://cdn.jsdelivr.net/npm/showdown';
    script.src = 'http://ipfs.blockringtm.ml/ipfs/QmeyFRD9ffRzTn4QuTWvxyQAUjEhBpF2NWZKYuYwsrmkye/showdown.min.js';
    script.src = 'http://127.0.0.1:8080/ipfs/QmeyFRD9ffRzTn4QuTWvxyQAUjEhBpF2NWZKYuYwsrmkye/showdown.min.js';

    document.getElementsByTagName("head")[0].appendChild(script);
    script.onload = function () {
       var elems = document.getElementsByClassName('md');
       console.log(elems);
       for(var i=0; i<elems.length; i++) {
          buf = elems[i].innerHTML;
          console.log(buf);
          var converter = new showdown.Converter();
          elems[i].innerHTML = converter.makeHtml(buf);
          //elems[i].style.display = 'none';
       }

    }

