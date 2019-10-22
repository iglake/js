/* $Id: config.js 1.6.9 2019/10/22 14:19:57 iggy Exp $

   $Revision: v1.6.9 $

   this js script that the _json.%domain% DNSi TXT record 
   and use it as a map to substitute keywords ...

 usage :

<script src=https://cdn.jsdelivr.net/gh/iglake/js@1.6/dist/dns.js></script>
<script src=https://cdn.jsdelivr.net/gh/iglake/js@1.6/dist/config.js ></script>
<script> DNS.Query('_json.'+domain,'TXT', callback('body')) </script>

*/

var hostname = document.location.hostname
var domain = hostname.replace(/www./,'')
var loc = document.location.toString()
    loc = loc.replace(/#.*/,'')
var fragment = window.location.hash.substring(1)


function callback(tag) {
   var display = function(json) {
   var map = []
   console.log(json)
   var rr = json.rr
   let tics = json.tics
   for(let i=0; i<rr.length; i++) {
    if ( json['type'] == 'TXT' ) {
      txt = decode(rr[i]['txtdata'])
      console.log('txt['+i+']='+txt)
    } else {
      txt = '{"title":"JSon Config Record","name":"JSonCFG","status":"empty","note":"pass it forward!","framaid":"jsonconf","qm":"z6cYNbecZSFzLjbSimKuibtdpGt7DAUMMt46aKQNdwfs"}'
    }
      map = JSON.parse(txt)
      console.log(map)
   }
   let badges = document.getElementById('badges')
   if (badges) {
      badges.innerHTML = badges.innerHTML.replace(/%ip%/g,json.ip)
      badges.innerHTML = badges.innerHTML.replace(/%name%/g,map['name'])
   }
   let head = document.getElementsByTagName('head')[0]
   //console.log('tag: '+tag)
   let bod = document.getElementsByTagName(tag)[0]
   if ( typeof(bod) == 'undefined') {
       bod = document.getElementById(tag)
   }
   let url
   let e = bod.getElementsByClassName('url')[0]
   if (typeof(e) != 'undefined') {
     url = e.href
   } else {
     url = 'http://ipfs.blockringtm.ml/'
   }
   let date = pDate(tics)


   var buf = bod.innerHTML
       buf = buf.replace(/%ip%/g,json.ip)
       buf = buf.replace(/%tics%/g,tics)
       buf = buf.replace(/%date%/g,date)
       buf = buf.replace(/%url%/g,url)
       buf = buf.replace(/%loc%/g,loc)
       buf = buf.replace(/%domain%/g,domain)
       buf = buf.replace(/%hostname%/g,hostname)
       buf = buf.replace(/%origin%/g,document.location.origin)
       buf = buf.replace(/%fragmetn%/g,fragment)
       buf = buf.replace(/%rr%/g,txt)

   for (let key in map) {
      let rex = RegExp('%'+key+'%','g')
      buf = buf.replace(rex,map[key])
      head.innerHTML = head.innerHTML.replace(rex,map[key])
   }

   bod.innerHTML = buf; // rewrite the body !
   }
   return display
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

function decode(str) {
  return str.replace(/\\(\d{3})/g, function(match, dec) {
				return String.fromCharCode(dec)
	})
}
