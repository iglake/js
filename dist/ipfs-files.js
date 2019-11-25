/*
 This script talk to the 5001 gateway to get the rootkey,
 it returns a map w/
   peerid: QmRLZbRZcqdrM6L3rTFYFuz56vBoS1Z5dsu4V4X5yboZc1
   rootkey: QmcaHYF39Ui6K58y62d2AJu4UTxnkqiCf2eAxBRi8nnqmv

*/

var username = document.getElementById('username').value;
console.log('username: '+username);


 function callback(map) {
 console.log(map);
 bod.innerHTML = bod.innerHTML.replace(/%user%/g,username)
 bod.innerHTML = bod.innerHTML.replace(/%fragment%/g,fragment)
 bod.innerHTML = bod.innerHTML.replace(/%peerid%/g,map['id']['peerid'])
 console.log('match: ',bod.innerHTML.match(/%rootkey%/))
 bod.innerHTML = bod.innerHTML.replace(/%rootkey%/g,map['files']['/'])
 bod.innerHTML = bod.innerHTML.replace(/%root%/g,map['files']['/root'])
 bod.innerHTML = bod.innerHTML.replace(/%my%/g,map['files']['/my'])

 bod.innerHTML = bod.innerHTML.replace(new RegExp('http://gateway.public','g'),'https://ipfs.blockringtm.ml')
 bod.innerHTML = bod.innerHTML.replace(new RegExp('http://gateway.local','g'),'http://127.0.0.1:8080')

 bod.innerHTML = bod.innerHTML.replace(
     new RegExp('/webui#/files(/[^/"]+)','g'),
     function(_,a) {
       if (typeof(map['files'][a]) == 'undefined') {
         return getHashKey(a)
         //.then( h => { hash = h;return Promise.resolve(h) }; );
       } else {
         return '/ipfs/'+map['files'][a]; 
       }
     }
 )
 bod.innerHTML = bod.innerHTML.replace(
     new RegExp('/webui#/([^/]+)/([^/"]+)','g'),
     function(_,a,b) { return ((a == 'id' || a == 'symb') ? '/ipns/' : '/ipfs/') + map[a][b] } )
 }


var map = { files: {}, symb: {},
id: {
 "michelc":"Qmd2iHMauVknbzZ7HFer7yNfStR4gLY1DSiih8kjquPzWV",
 "iggyl":"QmRLZbRZcqdrM6L3rTFYFuz56vBoS1Z5dsu4V4X5yboZc1" }

};

const status = resp => {
  if (resp.status >= 200 && resp.status < 300) {
    return Promise.resolve(resp)
  }
  return Promise.reject(new Error(resp.statusText))
}
const error = err => { console.log(err); }

// get peerid & rootkey

// ipfs config Addresses.API
const gw = 'http://127.0.0.1:5001'
const api_url = gw + '/api/v0/'

var tasks = Promise.all(
  [getPeerID(),
  getHashKey('/'),
  getHashKey('/root'),
  getHashKey('/my'),
  getHashKey('/secure'),
  getSymbKeys()])
.then( results => { console.log(results); return Promise.resolve(map); })
.then( map => { callback(map); } )
.catch(error)


function getPeerID() {
  var url = api_url + 'config?&arg=Identity.PeerID&encoding=json'
  console.log(url);
  return fetchjson(url)
     .then( obj => { map.id['peerid'] = obj.Value ;
           return Promise.resolve(obj.Value) })
     .catch(error)
}

function getHashKey(path) {
   // get the hash corresponding to the mfs path
   var url = api_url + 'files/stat?arg='+path+'&hash=1';
   console.log(url);
   return fetchjson(url)
      .then( obj => { console.log(obj); return obj.Hash; } )
      .then( mhash => { map.files[path] = mhash ;
            console.log('path: '+mhash+' '+path);
            return Promise.resolve(mhash) })
      .catch(error)
}

function getSymbKeys() {
   // listing keys ...
   var url = api_url + 'key/list?l=1';
   return fetchjson(url)
      .then( obj => { console.log(obj); return obj.Keys; } )
      .then( keys => { keys.forEach(
                        obj => { map.symb[obj.Name] = obj.Id } ); 
            return Promise.resolve(map.symb) })
      .catch(error)
}


function fetchjson(url) {
  return fetch(url).then(status).then( resp => resp.json() )
}

function get(url) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };// Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    }; 
    // Make the request
    req.send();
  });
}
function getJSON(url) {
  return get(url).then(JSON.parse);
}

