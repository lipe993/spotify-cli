#!/bin/bash

case $2 in
    # spotify-cli get --playlist [playlist id]
    --playlist)
        node ./bin/get/playlist.js $3 --auth "$1"
        ;;
    # spotify-cli get --album [album id]
    --album)
        node ./bin/get/album.js $3 --auth "$1"
        ;;
    # spotify-cli get --devices
    --devices)
        node ./bin/get/devices.js --auth "$1"
        ;;
    # spotify-cli get --uri [id] --[type]
    --uri)
        node ./bin/get/uri.js --id $3 --type $4
        ;;
    --playing)
        node ./bin/get/playing.js --auth "$1"
        ;;
esac