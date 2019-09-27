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
    - <https://gateway.ipfs.io/ipfs/bafybeia6g5eg6awq5liqrs67w47cy6cdxpofbyaadxmipmg6ilzbb5inzm/www/js>
    - <https://cloudflare-ipfs.com/ipfs/bafybeieogtuije2wgyz6k35mbirqhbikpjoslhz24bhjuwhbewdfmf2uam/js>
    - <https://iglake.github.io/js>

[![](https://data.jsdelivr.com/v1/package/gh/iglake/js/badge)](https://www.jsdelivr.com/package/gh/iglake/js)

### Examples:

 * collaborative framapad "web-page" : <http://ipfs.io/ipfs/bafybeieogtuije2wgyz6k35mbirqhbikpjoslhz24bhjuwhbewdfmf2uam/js/examples/frama.htm>
 *  or <https://iglake.github.io/js/examples/frama.htm>

 *  ipfs node detection : <https://iglake.github.io/js/examples/ipfsdetect.htm>

 * misc : about [how](https://www.one-tab.com/page/XuCCeOg2SkSSwTD8JzvWfw) to publish on GitHub (see <https://ipfs.io/ipfs/QmX87y253JbdLWUcd5Qdd3HaBYpoiqr8wVUYQHiuNYHAG2/>)

 * blockRing™ hash : qm=[QmXvJ8D1B9hjiP53pxev875yYgVhGYJx4sZxNnDKh87498](http://gateway.ipfs.io/ipfs/QmXvJ8D1B9hjiP53pxev875yYgVhGYJx4sZxNnDKh87498)

### Usage:

```html
<!-- previous revision: a351214
<script src="https://cdn.statically.io/gh/iglake/js/a351214/dist/inc-fp.js">
-->
<!-- current revision: latest : https://github.com/iglake/js/commit/master -->
<script src="https://cdn.jsdelivr.net/gh/iglake/js@master/dist/inc-fp.min.js">
</script>
 ```

[gh]: http://github.com/iglake/
[jd]: https://www.jsdelivr.com/package/gh/iglake/js
[cf]: https://cloudflare-ipfs.com/ipfs/bafybeieogtuije2wgyz6k35mbirqhbikpjoslhz24bhjuwhbewdfmf2uam/js

clone it with the following command :
  ```git clone https://github.com/iglake/js.git```

### Last fix ...

- fixing buf is not defined erro (inc-md.js:64)
