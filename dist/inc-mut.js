
var url;
var buf;
var hash = 'error';
var url = 'http://12.0.0.1:8080/iphs/files/web/example.com';

console.log('DBUG 0 !');

// inject *.js :

//  md5.js ...
var script = document.createElement('script');
    script.setAttribute('type','text/javascript');
    script.src = '//iphs.ga/js/md5.js';
    script.onload = function () {
       console.log('DBUG 1 !');
       var digest =  md5(document.location.toString());
       hash = digest.toString().substr(0,5);
       var frama = 'web_' + hash;
       fpupdate(frama);
       var buf; // get source file from ipns ...
       var request = new XMLHttpRequest();
       request.open('GET', url+'/export/txt',true);
       request.send();
       request.onload = function () {
          console.log('DBUG 2 !');
          resp = request.response.toString();
          buf = resp.replace(/\\\n/g,'<br>');
          render(buf);
          if (document.location.href.match(/\.htm#md/) ) {
             document.getElementById('md').innerHTML = resp;
          }
          if ( typeof(showdown) == 'undefined' ) {
          }
       }
       request.onerror = function () {
          console.error(request.statusText);
       };
    }
    document.getElementsByTagName('head')[0].appendChild(script);

//  showdown.js ...
var script2 = document.createElement('script');
    script2.setAttribute('type','text/javascript');
    script2.src = 'https://cdn.jsdelivr.net/npm/showdown';
   document.getElementsByTagName("head")[0].appendChild(script2);
    //script2.src = 'http://127.0.0.1:8080/ipfs/QmeyFRD9ffRzTn4QuTWvxyQAUjEhBpF2NWZKYuYwsrmkye/showdown.min.js';


function render(md) {
   var converter = new showdown.Converter();
   if ( typeof(showdown) == 'undefined' ) {
     document.getElementById('rendered').innerHTML = "/!\\ markdown not loaded";
     script2.onload = function () {
        console.log('DBUG 3 !');
        if (! document.location.href.match(/#/) ) {
           document.getElementById('rendered').innerHTML = converter.makeHtml(md);
        }
     }
   } else {
        console.log('DBUG 3bis !');
           document.getElementById('rendered').innerHTML = converter.makeHtml(md);
           document.getElementById('md').style.display = 'none';
   }
   // script.onreadystatechange = function () { }
}


function toggle(id) {
    var obj = document.getElementById(id);
    obj.style.display = (obj.style.display == "none") ? "block" : "none";
    //obj.contentWindow.location.reload(true);
    obj.src = obj.src; // trigger a reload (??)
}

function fpupdate(frama) {
    url = '//mensuel.framapad.org/p/'+frama;
    document.getElementById('template').href = url;
    document.getElementById('rendered').innerHTML = "frama: <a href="+url+">"+url+"</a>";
    document.getElementsByClassName('include')[0].href = url;
    document.getElementsByClassName('include')[0].innerHTML = frama;
    document.getElementById('fp').src = url+'?showControls=true&showChat=false&showLineNumbers=true&useMonospaceFont=true';
    var elems = document.getElementsByClassName('include');
    for(var i=0; i<elems.length; i++) {
      elems[i].href = url + '/export/txt';
    }
    if (document.getElementById('frama')) {
      document.getElementById('frama').innerHTML = frama;
    }
} 


