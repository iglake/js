/* Google doc as a website ! */

/*
#once made shareable document available at :
https://drive.google.com/file/d/1ODL1usRSwBlw5N5dn9P0l863LQGYbzr9/view?usp=sharing
https://docs.google.com/document/d/1mfrZo4lwVmVG6DtLizCZ75_g1C-SRom2Ie6kmMRsgpw/edit?usp=sharing
*/
var loc = document.location.toString();
    loc = loc.replace(/#.*/,'');
console.log('loc: ' + loc)

// anonymous functions ...
const status = resp => {
  if (resp.status >= 200 && resp.status < 300) {
    return Promise.resolve(resp)
  }
  return Promise.reject(new Error(resp.statusText))
}
const get_url = (e,i,u) => {
   fetch(u)
     .then(status)
     .then( resp => resp.text() )
     .then( buf => render(e,i,buf)
     )
   .catch(function(error) {
      console.log('catch: '+error)
   });

}

// inject *.js :
//  showdown.js ...
var script = document.createElement('script');
    script.setAttribute('type','text/javascript');
    script.src = 'https://cdn.jsdelivr.net/npm/showdown@latest/dist/showdown.min.js';
   document.getElementsByTagName("head")[0].appendChild(script);

var elems = document.getElementsByClassName('md');
for(var i=0; i<elems.length; i++) {
   var e = elems[i]
   var gdoc = e.getAttribute('data-gdid');
   var url;
   if (gdoc) {
      console.log('gdoc'+i+': '+gdoc);
      url = 'https://docs.google.com/document/export?id=' + gdoc + '&format=txt';
   }
   if (typeof(url) != 'undefined') {
      console.log('url: '+url);
      get_url(e,i,url)
   }
}

function edit(e) {
   var gdoc = e.getAttribute('data-gdid');
   if (gdoc) {
      url = 'https://docs.google.com/document/view?id=' + gdoc;
      window.location = url;
   }
}
function toggle(id) {
    var obj = document.getElementById(id);
    obj.style.display = (obj.style.display == "none") ? "block" : "none";
    //obj.contentWindow.location.reload(true);
    // obj.src = obj.src; // trigger a reload (??)
}


function render(e,i,md) {
   var converter = new showdown.Converter();
          md = md.replace(/\\\n/g,'<br>');
          md = md.replace(/%url%/g,loc);
          md = md.replace(/%domain%/g,document.location.hostname);
          md = md.replace(/%origin%/g,document.location.origin);
          md = md.replace(/%gdid%/g,e.getAttribute('data-gdid'));
          md = md.replace(/{{DUCK}}/g,'http://duckduckgo.com/?q');

   if (! document.location.href.match(/#/) ) {
      if ( typeof(showdown) == 'undefined' ) {
         e.innerHTML = "/!\\ markdown not loaded";
         script.onload = function () {
            e.innerHTML = converter.makeHtml(md);
         }
      } else {
         e.innerHTML = converter.makeHtml(md);
      }
   } else {
           e.innerHTML = md;
   }
}

