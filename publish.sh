#

symb=jscript
key=$(ipfs key list -l | grep -w $symb | cut -d' ' -f 1)

rsync -aub $WWW/js/*.js src/
rsync -Caub src/*.js $WWW/js/
qm=$(ipfs add -Q -r -w src/*.js README.md examples qm.log)
tic=$(date +%s)
echo $tic: $qm >> qm.log
echo " - $qm" >> mutable.yml
tail -1 qm.log
echo http://127.0.0.1:8080/ipfs/$qm

rm -rf dist/*
find . -name \*.org -delete
ipfs get -o dist /ipfs/$qm

ipfs files rm -r /www/js
ipfs files cp /ipfs/$qm /www/js
www=$(ipfs files stat /www --hash)
ww32=$(ipfs cid base32 $www)
echo http://$ww32.ipfs.dweb.link/js
echo https://gateway.ipfs.io/ipfs/$www/js

ipfs name publish --allow-offline --key=$symb /ipfs/$www/js &

rootkey=$(ipfs files stat / --hash)
echo https://gateway.ipfs.io/ipfs/$rootkey/www/js
echo https://$ww32.cf-ipfs.com/js
echo https://cdn.jsdelivr.net/gh/iglake/js@latest/dist/inc.min.js
cat README.txt | sed -e "s/\$qm/$qm/g" \
    -e "s/\$rootkey/$rootkey/" -e "s/\$www/$www/" > README.md
git add --all 
git reset src dist/examples dist/qm.log
git commit
echo do a git push too !
echo https://github.com/iglake/js/releases/
echo https://cdn.jsdelivr.net/gh/iglake/js@latest/
