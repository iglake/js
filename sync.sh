#

# vim: nospell
# master :
echo "// inbound : cssjs/js/src/"
rsync -vabu $HOME/HDD/websites/tommy/repositories/helio/js/*.js $HOME/GITrepo/iglake/cssjs/js/src/
rsync -vabu $WWW/js/*.js $HOME/GITrepo/iglake/cssjs/js/src/
# sync back ...
echo "// outbound : \$WWW/js"
rsync -Cabvu $HOME/GITrepo/iglake/cssjs/js/src/*.js $WWW/js/

qm=$(ipfs add -Q -r -w src/*.js README.md qm.log --cid-base=base58btc)
rm -rf dist/*
find . -name "*.*~*" -delete
ipfs get -o dist /ipfs/$qm

