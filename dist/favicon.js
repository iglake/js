/* $Revision: v1.8.3 $

 This javascript set a default favicon based on the origin server of the document

usage: place the ligne below within the <head> tag of your html file
<script src="https://cdn.jsdelivr.net/gh/iglake/js@latest/dist/favicon.js" crossorigin="anonymous"></script>


 ~iggyl
 */

let head = document.getElementsByTagName('head')[0]

var link;
var ico_url = document.location.origin + '/favicon.ico'
let links = head.getElementsByTagName('link')
for(let i=0; i<links.length; i++) {
   if (links[i].rel == 'icon') {
      link = links[i]
      console.log(links[i])
      ico_url = link.href
   }

}
if (typeof(link) == 'undefined') {
     console.log('creating favicon link !')
     link = document.createElement('link')
     link.setAttribute('rel','icon')
     link.setAttribute('type','image/png')
     link.setAttribute('href','http://127.0.0.1:8088/favicon.ico') // default icon ...
     document.getElementsByTagName('head')[0].appendChild(link)
}

if (! ico_url.match(/adorable\.io/)) {
var script = document.createElement('script')
    script.setAttribute('type','text/javascript')
    script.src = 'https://cdn.jsdelivr.net/gh/iglake/js@master/dist/md5.js'
    script.onload = function () {
       var digest =  md5(ico_url)
       //console.log('ico_url: '+ico_url)
       var favico = 'https://api.adorable.io/avatar/256/'+digest+'.png';
       if ( typeof(link.href) != 'undefined') {
         link.href = favico;
       }
       console.log('favicon: '+favico)
       img = document.createElement('img');
       img.setAttribute('src',favico);
       img.setAttribute('id','favico');
       img.setAttribute('alt',digest);
       img.style.width = '32px';
       img.style.position = 'fixed';
       img.style.right = '0';
       img.style.bottom = '0';
       img.style.opacity = '0.5';
       img.onclick = function () { alert('digest: '+digest) };
       document.getElementsByTagName('body')[0].appendChild(img);
       
       
    }
    document.getElementsByTagName('head')[0].appendChild(script)
}
