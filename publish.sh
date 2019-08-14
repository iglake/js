#

symb=jscript
key=$(ipfs key list -l | grep -w $symb | cut -d' ' -f 1)
gitid=$(git rev-parse --short HEAD)

rsync -aub $WWW/js/*.js src/
rsync -Caub src/*.js $WWW/js/

qm=$(ipfs add -Q -r -w src/*.js README.md examples qm.log)
tic=$(date +%s)
echo $tic: $qm >> qm.log
echo " - $qm" >> mutable.yml
tail -1 qm.log
echo http://127.0.0.1:8080/ipfs/$qm
ver=$($HOME/bin/version README.md | xyml scheduled)


rm -rf dist/*
find . -name \*.org -delete
find . -name \*~ -delete
ipfs get -o dist /ipfs/$qm

ipfs files rm -r /www/js
ipfs files cp /ipfs/$qm /www/js
echo -n "www: "
www=$(ipfs files stat /www --hash)
if [ "x$www" != 'x' ]; then
ww32=$(ipfs cid base32 $www)
echo http://$ww32.ipfs.dweb.link/js
echo url: https://gateway.ipfs.io/ipfs/$www/js

echo "info: /ipfs/$www/js"
echo ipns: http://127.0.0.1:8080/ipns/$key
ipfs name publish --allow-offline --key=$symb /ipfs/$www/js &


echo -n "rootkey: "
rootkey=$(ipfs files stat / --hash)
echo https://gateway.ipfs.io/ipfs/$rootkey/www/js
echo cf: https://$ww32.cf-ipfs.com/js
echo cdn: https://cdn.jsdelivr.net/gh/iglake/js@latest/dist/inc.min.js
cat README.txt | sed -e "s/\$ver/$ver/g" -e "s/\$gitid/$gitid/g" \
    -e "s/\$qm/$qm/g" -e "s/\$rootkey/$rootkey/" -e "s/\$www/$www/" > README.md
else
 echo no /www
fi


git add --all 
git reset src dist/examples dist/qm.log
git status
if git commit; then
gitid=$(git rev-parse HEAD)
git tag -f -a $ver -m "tagging $gitid on $(date +%D)"
#echo gitid: ${gitid:0:9} # this is bash!
echo gitid: $gitid | cut -b 1-14
echo $tic: $gitid >> revs.log
fi
echo "# do : "
echo git push
echo url: https://github.com/iglake/js/releases/
echo url: https://cdn.jsdelivr.net/gh/iglake/js@latest/
