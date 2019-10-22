/*
 This scripts replace remote deps w/ local ones ...
*/
const gw = 'http://127.0.0.1:8080';

// links href ...
var elems = document.getElementsByTagName('link');
for(var i=1; i<elems.length; i++) {
   let url = elems[i].href;
   if (url.match(/ipfs/) ) {
      let ipath = url.replace(/.*\/\/[^\/]+\/ipfs/,'/ipfs');
      elems[i].href = gw+ipath;
   } else {
      let local_url = url.replace(/.*\/\/[^\/]+\/gh/,'http://ocean.local:8088/GITrepo');
          local_url = local_url.replace(/@[^\/]+/,'');
      elems[i].href = local_url
      console.log('link.href: '+local_url);
   }
}
// body background image
var elem = document.getElementsByTagName('body')[0];
if (elem.style.backgroundImage) {
   url = elem.style.backgroundImage;
   console.log(elem.style.background);
   if (url.match(/ipfs/) ) {
     ipath = url.replace(RegExp('.*//[^/]+/ipfs'),'/ipfs');
     console.log('bg.image: '+gw+ipath);
     elem.style.backgroundImage = 'url('+gw+ipath+')';
  }
}


// scripts src ...
elems = document.getElementsByTagName('script');
for(var i=1; i<elems.length; i++) {
  if (elems[i].src) {
   let url = elems[i].src;
   if (url.match(/ipfs/) ) {
      let ipath = url.replace(RegExp('.*//[^/]+/ipfs'),'/ipfs');
      elems[i].src = gw+ipath;
   } else {
      let local_url = url.replace(RegExp('.*//[^/]+/gh'),'http://ocean:8088/GITrepo');
          local_url = local_url.replace(RegExp('@[^/]+'),'');
      elems[i].src = local_url
      console.log('script.src: '+local_url);
   }
  }
}

