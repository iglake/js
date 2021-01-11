// this script get the code for a smart contract
//
console.log('js: getcode');
console.log('loc:',location);

var path=location.pathname
console.log('path:',path);
console.log('url:',url);

fetch(url)
.then ( buf => { console.log(buf) } )
.catch ( e => { Erreur(e) } )
