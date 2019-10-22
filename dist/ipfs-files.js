/*
 This script talk to the 5001 gateway to get the rootkey,
 it returns a map w/
   peerid: QmRLZbRZcqdrM6L3rTFYFuz56vBoS1Z5dsu4V4X5yboZc1
   rootkey: QmcaHYF39Ui6K58y62d2AJu4UTxnkqiCf2eAxBRi8nnqmv

*/
const status = resp => {
  if (resp.status >= 200 && resp.status < 300) {
    return Promise.resolve(resp)
  }
  return Promise.reject(new Error(resp.statusText))
}
const error = err => { console.log(err); }

// get peerid

// ipfs config Addresses.API
const gw = 'http://127.0.0.1:5001'
const api_url = gw + '/api/v0/'


var url = api_url + 'config?&arg=Identity.PeerID&encoding=text'
console.log(url);
fetch(url).then(status).then( resp => resp.text() ).then( peerid => { document.getElementById('peerid').innerHTML = peerid }).catch(error)

var url = api_url + 'files/stat?arg=/my&hash=1';
fetch(url).then(status).then( resp => resp.json() )
.then( obj => { console.log(obj); return obj.Hash; } )
.then( rootkey => { document.getElementById('rootkey').innerHTML = rootkey }).catch(error)

// listing keys ...
var url = api_url + 'files/stat?arg=/my&hash=1';
