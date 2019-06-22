
var request = new XMLHttpRequest();
var url = document.getElementsByClassName('include')[0].href;
    request.open('GET', url);
    request.send();

var qm = 'QmUNLLsPACCz1vLxQVkXqqLX5R1X345qqfHbsf67hvA3Nn';
    qm = 'QmeyFRD9ffRzTn4QuTWvxyQAUjEhBpF2NWZKYuYwsrmkye';
var script = document.createElement('script');
    script.setAttribute('type','text/javascript');
    script.src = 'http://gateway.ipfs.io/ipfs/'+ qm + '/showdown.min.js';

    request.onload = function () {
       resp = request.response.toString()
          if (document.location.href.match(/\.htm#md/) ) {
             document.getElementById('md').innerHTML = resp;
          }

       document.getElementsByTagName("head")[0].appendChild(script);
       script.onload = function () {
          buf = resp.replace(/\\\n/g,'<br>');
          if (! document.location.href.match(/#/) ) {
             var converter = new showdown.Converter();
             document.getElementById('rendered').innerHTML = converter.makeHtml(buf);
             document.getElementById('md').style.display = 'none';
          }
       }
       // script.onreadystatechange = function () { }
    }
