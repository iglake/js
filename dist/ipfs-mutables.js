/*
 This script talk to the 5001 gateway to convert
 a mfs path into a immutable qm hash
*/

// ipfs config Addresses.API
const webui = 'http://127.0.0.1:5001';
const api_url = webui + '/api/v0/'

const lgw = 'http://127.0.0.1:8080'
const pgw = 'https://ipfs.blockringtm.ml';
//let html = document.getElementsByTagName('html')[0]; console.log(html)
var bod = document.getElementsByTagName('body')[0];

var username = document.getElementById('username').value;
console.log('username: '+username);

const status = resp => {
  if (resp.status >= 200 && resp.status < 300) {
    return Promise.resolve(resp)
  }
  return Promise.reject(new Error(resp.statusText))
}
const error = err => { console.log(err); }


callback();

 function callback() {

 bod.innerHTML = bod.innerHTML.replace(/http:\/\/gateway.local/g,webui);
 bod.innerHTML = bod.innerHTML.replace(/http:\/\/gateway.public/g,pgw);
 bod.innerHTML = bod.innerHTML.replace(
     new RegExp('/webui#/files((/[^"]+)?/([^/" ]+))','g'),
                 function(_,a,b,c) {
     console.log(a,b,c)
     var hash = getHashKey(b).then( h => { return Promise.resolve(h) } ).catch(error);
     return _;
     } )

 }


var tasks = Promise.all( [getPeerID(), getHashKey('/my')] )
.then( results => { return Promise.resolve(results); })
.catch(error)


function getPeerID() {
  var url = api_url + 'config?&arg=Identity.PeerID&encoding=json'
  console.log(url);
  return fetchjson(url)
     .then( obj => { console.log(obj); return Promise.resolve(obj.Value) })
     .catch(error)
}

function getHashKey(path) {
   // get the hash corresponding to the mfs path
   var url = api_url + 'files/stat?arg='+path+'&hash=1';
   console.log(url);
   return fetchjson(url)
      .then( obj => { console.log(obj); return obj.Hash; } )
      .then( mhash => {
            console.log('path: '+mhash+' '+path);
            return Promise.resolve(mhash) })
      .catch(error)
}

function fetchjson(url) {
  return fetch(url).then(status).then( resp => resp.json() )
}

