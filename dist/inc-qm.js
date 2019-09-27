/* IPFS file as a website ! */

var url = document.location.toString();
var loc = url
    loc = loc.replace(/#.*/,'');
console.log('loc: ' + loc)

if ( url.match(/#/) ) {
   var hash = url.substring(url.indexOf('#')+1);
   console.log('hash='+hash)
   url = 'http://127.0.0.1:8080/ipfs/'+ hash;
}


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
// showdown.js ...
var script = document.createElement('script');
    script.setAttribute('type','text/javascript');
    script.src = 'https://cdn.jsdelivr.net/npm/showdown@latest/dist/showdown.min.js';
   document.getElementsByTagName("head")[0].appendChild(script);

var elems = document.getElementsByClassName('md');
for(var i=0; i<elems.length; i++) {
   var e = elems[i]
   var mhash = e.getAttribute('data-mhash');
   if (typeof(mhash) != 'undefined') {
      console.log('mhash'+i+': '+mhash);
      var url = 'https://gateway.ipfs.io/ipfs/' + mhash;
      get_url(e,i,url)
   }
}

function render(e,i,md) {
          md = md.replace(/\\\n/g,'<br>');
          md = md.replace(/%url%/g,loc);
          md = md.replace(/%hostname%/g,document.location.hostname);
          md = md.replace(/%origin%/g,document.location.origin);
          // md = md.replace(/%gdid%/g,e.getAttribute('data-gdid'));
          md = md.replace(/{{DUCK}}/g,'http://duckduckgo.com/?q');

   if (! document.location.href.match(/#/) ) {
      if ( typeof(showdown) == 'undefined' ) {
         e.innerHTML = "/!\\ markdown not loaded";
         script.onload = function () {
            var converter = new showdown.Converter();
            e.innerHTML = converter.makeHtml(md);
         }
      } else {
         var converter = new showdown.Converter();
         e.innerHTML = converter.makeHtml(md);
      }
   } else {
           e.innerHTML = md;
   }
}

