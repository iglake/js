# js: my javascript collections

a bunch of personal javascripts usable via CDN ([jsdelivr][jd], [cloudflare][cf] or [github][gh])
(last [commit](https://github.com/iglake/js/commit/) & [releases](https://github.com/iglake/js/releases))

 * [inc.js][1] : a javascript that replace div with class=include with the content of its data-src's attribute
 * [inc-fp.js][2] : a javascript to include and render a markdown file from framapad
 * [...](https://cdn.jsdelivr.net/gh/iglake/js@master/dist/)

[1]: https://cdn.jsdelivr.net/gh/iglake/js@master/dist/inc.js
[2]: https://cdn.jsdelivr.net/gh/iglake/js@master/dist/inc-fp.js

 * other URLs for accessing the files :
    - <https://gateway.ipfs.io/ipfs/bafybeihwim3cdz75h5vqmuzwivjbjjzblxpfrc2esita2bjfvq7g4obdw4/www/js>
    - <https://cloudflare-ipfs.com/ipfs/bafybeiaruza327smy5rieaq6jr4imyab2kgxetq67o2rcvyne2brjnfeau/js>
    - <https://iglake.github.io/js>

[![](https://data.jsdelivr.com/v1/package/gh/iglake/js/badge)](https://www.jsdelivr.com/package/gh/iglake/js)

### Examples:

 * collaborative framapad "web-page" : <http://ipfs.io/ipfs/bafybeiaruza327smy5rieaq6jr4imyab2kgxetq67o2rcvyne2brjnfeau/js/examples/frama.htm>
 *  or <https://iglake.github.io/js/examples/frama.htm>

 *  ipfs node detection : <https://iglake.github.io/js/examples/ipfsdetect.htm>

 * misc : about [how](https://www.one-tab.com/page/XuCCeOg2SkSSwTD8JzvWfw) to publish on GitHub (see <https://ipfs.io/ipfs/QmX87y253JbdLWUcd5Qdd3HaBYpoiqr8wVUYQHiuNYHAG2/>)

 * blockRing™ hash : qm=[QmXch4vbceFt64HVbFbVwMmyxz1ntWdK29MrMdMhQQjAaA](http://gateway.ipfs.io/ipfs/QmXch4vbceFt64HVbFbVwMmyxz1ntWdK29MrMdMhQQjAaA)

### Usage:

```html
<!-- previous revision: 5506bff
<script src="https://cdn.statically.io/gh/iglake/js/5506bff/dist/inc-fp.js">
-->
<!-- current revision: latest : https://github.com/iglake/js/commit/master -->
<script src="https://cdn.jsdelivr.net/gh/iglake/js@master/dist/inc-fp.min.js">
</script>
 ```

[gh]: http://github.com/iglake/
[jd]: https://www.jsdelivr.com/package/gh/iglake/js
[cf]: https://cloudflare-ipfs.com/ipfs/bafybeiaruza327smy5rieaq6jr4imyab2kgxetq67o2rcvyne2brjnfeau/js

clone it with the following command :
  ```git clone https://github.com/iglake/js.git```

### Last fix ...

- minor fix in the publishing script (msg)
- added : ```git push --delete origin "v1.4.3"``` to remove pre-existing tag v1.4.3
- added : domain substitution in url for inc-md.js
