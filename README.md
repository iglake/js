# js: my javascript collections

<!-- vim: ft=markdown nospell
-->
a bunch of personal javascripts usable via CDN ([jsdelivr][jd], [cloudflare][cf] or [github][gh])
(last [commit](https://github.com/iglake/js/commit/) & [releases](https://github.com/iglake/js/releases))

 * [inc.js][1] : a javascript that replace div with class=include with the content of its data-src's attribute
 * [inc-fp.js][2] : a javascript to include and render a markdown file from framapad
 * [...](https://cdn.jsdelivr.net/gh/iglake/js@master/dist/)

[1]: https://cdn.jsdelivr.net/gh/iglake/js@master/dist/inc.js
[2]: https://cdn.jsdelivr.net/gh/iglake/js@master/dist/inc-fp.js

 * other URLs for accessing the files :
    - <https://gateway.ipfs.io/ipfs/bafybeidaegcwspxt3yxq4tzg5gvadpnmnc2q6otz6654yvew7xdawrho4a/www/js>
    - <https://cloudflare-ipfs.com/ipfs/bafybeidzcmpcemtyw5m5cqt73w4mm6q53mr3clp2ztm6eotfdwf6xppoai/js>
    - <https://iglake.github.io/js>

[![](https://data.jsdelivr.com/v1/package/gh/iglake/js/badge)](https://www.jsdelivr.com/package/gh/iglake/js)

### Examples:

 * collaborative framapad "web-page" : <http://ipfs.io/ipfs/bafybeidzcmpcemtyw5m5cqt73w4mm6q53mr3clp2ztm6eotfdwf6xppoai/js/examples/frama.htm>
 *  or <https://iglake.github.io/js/examples/frama.htm>

 *  ipfs node detection : <https://iglake.github.io/js/examples/ipfsdetect.htm>

 * misc : about [how](https://www.one-tab.com/page/XuCCeOg2SkSSwTD8JzvWfw) to publish on GitHub (see <https://ipfs.io/ipfs/QmX87y253JbdLWUcd5Qdd3HaBYpoiqr8wVUYQHiuNYHAG2/>)

 * blockRing™ hash : qm=[QmVXa1LUjgwWGDLGcWfJmKF4PsA4XTG1JsCUmgXBXRAHkz](http://gateway.ipfs.io/ipfs/QmVXa1LUjgwWGDLGcWfJmKF4PsA4XTG1JsCUmgXBXRAHkz)

### Usage:

```html
<!-- previous revision: 80f56e8
<script src="https://cdn.statically.io/gh/iglake/js/80f56e8/dist/inc-fp.js">
-->
<!-- current revision: latest : https://github.com/iglake/js/commit/master -->
<script src="https://cdn.jsdelivr.net/gh/iglake/js@master/dist/inc-fp.min.js">
</script>
 ```

[gh]: http://github.com/iglake/
[jd]: https://www.jsdelivr.com/package/gh/iglake/js
[cf]: https://cloudflare-ipfs.com/ipfs/bafybeidzcmpcemtyw5m5cqt73w4mm6q53mr3clp2ztm6eotfdwf6xppoai/js

clone it with the following command :
  ```git clone https://github.com/iglake/js.git```

### Last fix ...

- fix deletion of last fix lines in publish.sh script
- suppress the www. from domain name
- load a config.json and substitute de keyword from the div.md
