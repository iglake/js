# js: my javascript collections

a bunch of personal javascripts usable via CDN ([jsdelivr][jd], [cloudflare][cf] or [github][gh])
(last [commit](https://github.com/iglake/js/commit/) & [releases](https://github.com/iglake/js/releases))

 * [inc.js][1] : a javascript that replace div with class=include with the content of its data-src's attribute
 * [inc-fp.js][2] : a javascript to include and render a markdown file from framapad
 * [...](https://cdn.jsdelivr.net/gh/iglake/js@master/dist/)

[1]: https://cdn.jsdelivr.net/gh/iglake/js@master/dist/inc.js
[2]: https://cdn.jsdelivr.net/gh/iglake/js@master/dist/inc-fp.js

 * other URLs for accessing the files :
    - <https://gateway.ipfs.io/ipfs/bafybeicyotbg54jiz35xwbmq4ka7m7sgfuty3gsbntw5homwpfh2ittnyu/www/js>
    - <https://cloudflare-ipfs.com/ipfs/bafybeidyyebhutk5uyoruoelmle3dxs7kbwzwdf2w3xg3qn4sjxw7ht77u/js>
    - <https://iglake.github.io/js>

[![](https://data.jsdelivr.com/v1/package/gh/iglake/js/badge)](https://www.jsdelivr.com/package/gh/iglake/js)

### Examples:

 * collaborative framapad "web-page" : <http://ipfs.io/ipfs/bafybeidyyebhutk5uyoruoelmle3dxs7kbwzwdf2w3xg3qn4sjxw7ht77u/js/examples/frama.htm>
 *  or <https://iglake.github.io/js/examples/frama.htm>

 *  ipfs node detection : <https://iglake.github.io/js/examples/ipfsdetect.htm>

 * misc : about [how](https://www.one-tab.com/page/XuCCeOg2SkSSwTD8JzvWfw) to publish on GitHub (see <https://ipfs.io/ipfs/QmX87y253JbdLWUcd5Qdd3HaBYpoiqr8wVUYQHiuNYHAG2/>)

 * blockRing™ hash : qm=[QmYf6hEJCuMCmFGnJv4e6MMrL6XF8GB2DUdoLnE6FuFsk9](http://gateway.ipfs.io/ipfs/QmYf6hEJCuMCmFGnJv4e6MMrL6XF8GB2DUdoLnE6FuFsk9)

### Usage:

```html
<!-- previous revision: 3f0aa07
<script src="https://cdn.statically.io/gh/iglake/js/3f0aa07/dist/inc-fp.js">
-->
<!-- current revision: latest : https://github.com/iglake/js/commit/master -->
<script src="https://cdn.jsdelivr.net/gh/iglake/js@master/dist/inc-fp.min.js">
</script>
 ```

[gh]: http://github.com/iglake/
[jd]: https://www.jsdelivr.com/package/gh/iglake/js
[cf]: https://cloudflare-ipfs.com/ipfs/bafybeidyyebhutk5uyoruoelmle3dxs7kbwzwdf2w3xg3qn4sjxw7ht77u/js

clone it with the following command :
  ```git clone https://github.com/iglake/js.git```

### Last fix ...

- minor fix in the publishing script (msg)
- added : ```git push --delete origin "v1.2.11"``` to remove pre-existing tag v1.2.11
- 
