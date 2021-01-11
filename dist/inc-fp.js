
var url;
var frama;
var digest;
var hash = 'error';
var loc = document.location.toString();
    loc = loc.replace(/#.*/,'');

console.log('debug: "inc-fp.js" loaded !');

if(window.location.hash) {
  console.log(window.location)
  var hash = window.location.hash.substring(1); // Puts hash in variable, and removes the # character
  if (hash = 'edit') {
    document.getElementById('panel').style.display='block';
  }
}



// inject *.js :

//  md5.js ...
var script = document.createElement('script');
    script.setAttribute('type','text/javascript');
    script.src = 'https://cdn.jsdelivr.net/gh/iglake/js@master/dist/md5.js';
    script.onload = function () {
  console.log('dbug: md5 loaded !');
  digest =  md5(loc);
  if (typeof(framaid) != undefined) {
     console.log('framaid: '+framaid);
     frama = framaid
  } else {
    hash = digest.toString().substr(0,5);
    frama = 'pad_' + hash;
  }
  fpupdate(frama);
  var buf; // get source file from frama ...
  var request = new XMLHttpRequest();
      request.open('GET', url+'/export/txt',true);
      request.send();
      request.onload = function () {
          console.log('dbug: url:'+url+' loaded !');
          buf = request.response.toString();
          render(buf);
          if (document.location.href.match(/\.htm#md/) ) {
             document.getElementById('md').innerHTML = resp;
          }
          /* if ( typeof(showdown) == 'undefined' ) {
          } */
       }
       request.onerror = function () {
          console.error(request.statusText);
       };
  }
  document.getElementsByTagName('head')[0].appendChild(script);

//  showdown.js ...
var script2 = document.createElement('script');
    script2.setAttribute('type','text/javascript');
    script2.src = 'https://cdn.jsdelivr.net/npm/showdown@latest/dist/showdown.min.js';
   document.getElementsByTagName("head")[0].appendChild(script2);


function render(md) {
   let buf = md.replace(/\\\n/g,'<br>');
   buf = buf.replace('%url%',url);
   buf = buf.replace('%loc%',loc);
   buf = buf.replace('%md5%',digest);
   buf = buf.replace(/%domain%/g,document.location.hostname);
   buf = buf.replace(/%origin%/g,document.location.origin);
   buf = buf.replace(/%hash%/g,hash);
   buf = buf.replace(/%frama%/g,frama);
   buf = buf.replace(/{{DUCK}}/g,'http://duckduckgo.com/?q');
   var converter = new showdown.Converter();
   if ( typeof(showdown) == 'undefined' ) {
     document.getElementById('rendered').innerHTML = "/!\\ markdown not loaded";
     script2.onload = function () {
        console.log('dbug: showdown not (yet) loaded !');
        if (! document.location.href.match(/#/) ) {
           document.getElementById('rendered').innerHTML = converter.makeHtml(buf);
        }
     }
   } else {
        console.log('dbug: showdown loaded !');
           document.getElementById('rendered').innerHTML = converter.makeHtml(buf);
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

function edit(frama) {
    var url = '//mensuel.framapad.org/p/'+frama;
    console.log('info: edit '+ frama + ' !');
    if (document.getElementById('fp')) {
      document.getElementById('fp').src = url+'?showControls=true&showChat=false&showLineNumbers=true&useMonospaceFont=true';
    }
    document.getElementById('edit').setAttribute('onClick', "javascript: toggle('fp');");
    toggle('fp');
}

function fpupdate(frama) {
    url = '//mensuel.framapad.org/p/'+frama;
    console.log('info: fpupdate('+ frama + ') !');
    document.getElementById('template').href = url;
    document.getElementById('rendered').innerHTML = "frama: <a href="+url+">"+url+"</a>";
    if (typeof(document.getElementsByClassName('include')[0]) != 'undefined')  {
      document.getElementsByClassName('include')[0].href = url;
      document.getElementsByClassName('include')[0].innerHTML = frama;
    } 

    if (document.getElementById('edit')) {
      console.log('info: update edit w/ '+ frama + ' !');
      document.getElementById('edit').setAttribute('onClick', "javascript: edit('"+frama+"');");
    }
    var elems = document.getElementsByClassName('include');
    for(var i=1; i<elems.length; i++) {
      elems[i].href = url + '/export/txt';
    }
    elems = document.getElementsByClassName('framapad');
    for(var i=0; i<elems.length; i++) {
      elems[i].href = url;
    }
    if (document.getElementById('frama')) {
      document.getElementById('frama').innerHTML = frama;
    }
} 


