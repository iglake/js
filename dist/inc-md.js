// assumed https://cdn.jsdelivr.net/npm/showdown is loaded

console.log(document.location)
let domain = document.location.hostname
    domain = domain.replace(/www./,'');
var map = {'domain':domain }; // substitution map

var loc = document.location.toString();
    loc = loc.replace(/#.*/,'');

var request = new XMLHttpRequest();
var url = document.getElementsByClassName('include')[0].href;
    if ( url.match(/#$/) ) {
    // if ∃ fragment ⇒ take the basename of url and add .md extension
      let p = url.lastIndexOf('/') + 1;
      let d = url.lastIndexOf('.');
      url = url.substring(p,d) + '.md';
    } else if (url.match(/%(\w+)%/)) { // replace %keywords%
      let matches = url.match(/%(\w+)%/);
      let rex = new RegExp('%'+matches[1]+'%');
      url = url.replace(rex,map[matches[1]]);
      console.log('url: '+url)
    }
    // update html for info
      var elems = document.getElementsByClassName('include');
      elems[0].innerHTML = url;
      for(let i=0; i<elems.length; i++) {
        elems[i].href = url;
      }

    request.open('GET', url);
    request.send();

    request.onload = function () {
       var resp = request.response.toString()
          if (document.location.href.match(/\.htm#md/) ) {
             document.getElementById('md').innerHTML = resp;
          }

          // load config.json file
          let config = new XMLHttpRequest();
          let s = url.lastIndexOf('/') + 1;
          let dir = url.substring(0,s);
          console.log('cfg: '+dir+'config.json');
          config.open('GET', dir + 'config.json');
          config.send();
          config.onload = function () {
             if (config.status == 200) {
                var json = JSON.parse(config.response)
                console.log(json)
                buf = resp.replace(/%url%/g,url);
                for(let key in json) {
                   let rex = RegExp('%'+key+'%','g');
                   buf = buf.replace(rex,json[key]);
                   //console.log(rex)
                }
                buf = buf.replace(/%loc%/g,loc);
                buf = buf.replace(/%domain%/g,map['domain']);
                buf = buf.replace(/%hostname%/g,document.location.hostname);
                buf = buf.replace(/%origin%/g,document.location.origin);
                //buf = buf.replace(/%md5%/g,e.getAttribute('md5'));
             }

             buf = buf.replace(/\\\n/g,'<br>');
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
    }

