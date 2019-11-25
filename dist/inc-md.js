// assumed https://cdn.jsdelivr.net/npm/showdown is loaded

console.log(document.location)

let domain = document.location.hostname.replace(/www./,'')
let map = {'domain': domain, 'subdomain': domain.substring(0,domain.lastIndexOf('.')) }; // substitution map
''
var request = new XMLHttpRequest();
var url = document.getElementsByClassName('include')[0].href;
console.log('url: '+url);
let tics = (new Date()).getTime() / 1000;
let date = pDate(tics)


    if ( url.match(/#$/) ) {
    // if ∃ fragment ⇒ take the basename of url and add .md extension
      let p = url.lastIndexOf('/') + 1;
      let d = url.lastIndexOf('.');
      url = url.substring(p,d) + '.md';
    } else if (url.match(/%(\w+)%/)) { // replace %keywords%
      let matches = url.match(/%(\w+)%/);
      let rex = new RegExp('%'+matches[1]+'%');
      url = url.replace(rex,map[matches[1]]);
    }
    console.log('url: '+url)
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
       var buf = resp.replace(/%url%/g,url);
          if (document.location.href.match(/\.htm#md/) ) {
             document.getElementById('md').innerHTML = resp;
          }
          let domain = document.location.hostname.replace(/www./,'');
          let loc = document.location.toString().replace(/#.*/,'');
          buf = buf.replace(/%tics%/g,tics);
          buf = buf.replace(/%date%/g,date);
          buf = buf.replace(/%loc%/g,loc);
          buf = buf.replace(/%domain%/g,domain);
          buf = buf.replace(/%hostname%/g,document.location.hostname);
          buf = buf.replace(/%origin%/g,document.location.origin);
          //buf = buf.replace(/%md5%/g,e.getAttribute('md5'));
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

          // load page.json file
          let config = new XMLHttpRequest();
          let s = url.lastIndexOf('/') + 1;
          let d = url.lastIndexOf('.');
          let dir = url.substring(0,s);
          let jfile = url.substring(s,d) + '.json';

          console.log('url: '+url);
          console.log('dir: '+dir);
          console.log('cfg: '+jfile');
          config.open('GET', jfile);
          config.send();
          config.onload = function () {
             if (config.status == 200) {
                var json = JSON.parse(config.response)
                console.log(json)
                var bod = document.getElementsByTagName('body')[0];
                for(let key in json) {
                   let rex = RegExp('%'+key+'%','g');
                   bod.innerHTML = bod.innerHTML.replace(rex,json[key]);
                   //console.log(rex)
                }
             }
          }


    }

function pDate(tics) {
  let date = new Date(tics*1000)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hours = date.getHours()
  let minutes = "0" + date.getMinutes()
  var dateTime = month+'/'+day+'/'+year+' '+hours + ':' + minutes.substr(-2)
  return dateTime
}

