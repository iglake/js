#

# vim: nospell
# master :
echo "// inbound : cssjs/js/src/"
rsync -vabu $HOME/HDD/websites/tommy/repositories/helio/js/*.js $HOME/GITrepo/iglake/cssjs/js/src/
rsync -vabu $WWW/js/*.js $HOME/GITrepo/iglake/cssjs/js/src/
# sync back ...
echo "// outbound : \$WWW/js"
rsync -Cabvu $HOME/GITrepo/iglake/cssjs/js/src/*.js $WWW/js/

