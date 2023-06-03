#!/bin/bash

authorization=$3

case $1 in
    --album | --artist | --playlist | --track)
        node ./bin/search/search.js $1 --auth "$authorization" -q "$2"
        ;;
    *)
        echo "Error: cannot search for $2"
        exit
        ;;
esac