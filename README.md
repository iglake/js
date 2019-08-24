# js: my javascript collections

a bunch of personal javascripts usable via CDN ([jsdelivr][jd], [cloudflare][cf] or [github][gh])
(last [commit](https://github.com/iglake/js/commit/) & [releases](https://github.com/iglake/js/releases))

 * [inc.js][1] : a javascript that replace div with class=include with the content of its data-src's attribute
 * [inc-fp.js][2] : a javascript to include and render a markdown file from framapad
 * [...](https://cdn.jsdelivr.net/gh/iglake/js@master/dist/)

[1]: https://cdn.jsdelivr.net/gh/iglake/js@master/dist/inc.js
[2]: https://cdn.jsdelivr.net/gh/iglake/js@master/dist/inc-fp.js

 * other URLs for accessing the files :
    - <https://gateway.ipfs.io/ipfs/bafybeiajjhtixbqjrcrvehmbatxbycbgmulr57vg3d7wzavci4rnnvm64e/www/js>
    - <https://cloudflare-ipfs.com/ipfs/bafybeiccjftpft5k3m3cvnqagxzgpdb4pbizz3j6u6oku5njei74taf4bu/js>
    - <https://iglake.github.io/js>

[![](https://data.jsdelivr.com/v1/package/gh/iglake/js/badge)](https://www.jsdelivr.com/package/gh/iglake/js)

### Examples:

 * collaborative framapad "web-page" : <http://ipfs.io/ipfs/bafybeiccjftpft5k3m3cvnqagxzgpdb4pbizz3j6u6oku5njei74taf4bu/js/examples/frama.htm>
 *  or <https://iglake.github.io/js/examples/frama.htm>

 *  ipfs node detection : <https://iglake.github.io/js/examples/ipfsdetect.htm>

 * misc : about [how](https://www.one-tab.com/page/XuCCeOg2SkSSwTD8JzvWfw) to publish on GitHub (see <https://ipfs.io/ipfs/QmX87y253JbdLWUcd5Qdd3HaBYpoiqr8wVUYQHiuNYHAG2/>)

 * blockRing™ hash : qm=[QmNqN1prrZDMSwdNXcv4gvtDuU9sLDJ5NDZQ4D35AoYzjX](http://gateway.ipfs.io/ipfs/QmNqN1prrZDMSwdNXcv4gvtDuU9sLDJ5NDZQ4D35AoYzjX)

### Usage:

```html
<!-- previous revision: 81b44b0
<script src="https://cdn.statically.io/gh/iglake/js/81b44b0/dist/inc-fp.js">
-->
<!-- current revision: latest : https://github.com/iglake/js/commit/master -->
<script src="https://cdn.jsdelivr.net/gh/iglake/js@master/dist/inc-fp.min.js">
</script>
 ```

[gh]: http://github.com/iglake/
[jd]: https://www.jsdelivr.com/package/gh/iglake/js
[cf]: https://cloudflare-ipfs.com/ipfs/bafybeiccjftpft5k3m3cvnqagxzgpdb4pbizz3j6u6oku5njei74taf4bu/js

clone it with the following command :
  ```git clone https://github.com/iglake/js.git```

### Last fix ...

- minor fix in the publishing script (msg)
- added : ```git push --delete origin "v1.3.5"``` to remove pre-existing tag v1.3.5
- 
