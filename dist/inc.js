
// set the gateway based on what's available...
const Qmready='ZZ38qszEtTXx';
var GW= 'http://127.0.0.1:8080';
var url=GW + '/ipfs/'+Qmready;
console.log('0. url: '+url);

fetch(url)
.then(function(resp) {
      status = resp.status
      console.log('status: '+status);
      if (status = '200') {
      updategw(GW);
      resp.text().then((data) => console.log('data '+data));
      }
      })
.catch(function(error) {
      console.log('catch: '+error);
      GW = 'https://ipfs.blockring™.ml';
      updategw(GW);
      url=GW + '/ipfs/'+Qmready;
      console.log('1. url: '+url);
      fetch(url)
      .then(function(resp) {
            if (resp.status = '200') {
            updategw(GW);
            resp.text().then((data) => console.log('data '+data));
            }
            })
      .catch(function(error) {
            GW = 'https://gateway.ipfs.io';
            console.log('GW: '+GW);
            updategw(GW);

            });   
      });


function updategw(GW) {
   var elems = document.getElementsByClassName('gw');
       document.getElementById('GW').innerHTML = GW;
   for(var i=0; i<elems.length; i++) {
      if (typeof elems[i].href != 'undefined') {
         url = elems[i].href;
         elems[i].href = url.replace('https://ipfs.io',GW)
      } else if (typeof elems[i].src != 'undefiled') {
         url = elems[i].src;
         elems[i].src = url.replace('https://ipfs.io',GW)
      }
      console.log('s{https://ipfs.io/}{'+GW+'}')
   }
}

  
