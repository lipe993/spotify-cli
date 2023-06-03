#!/bin/bash

no_required_programs=false
no_client_credentials=false

# Get flags if any
while getopts ":-:" arg; do
  case $arg in
    -)
        case $OPTARG in
            no-required-programs)
                no_required_programs=true
                ;;
            no-client-credentials)
                no_client_credentials=true
                ;;
        esac
  esac
done

# install required programs (unless the program runs with the flag "--no-required-programs")
if [[ $no_required_programs -ne true ]]; then
    sudo apt install nodejs npm python3 -y
    # install node.js modules
    npm install express -g
fi

# Save client credentials
if [[ $no_client_credentials -ne true ]]; then
    node ./src/saveClientCredentials.js > client_credentials.json
fi

# set spotify-cli and all the .sh files in the bin directory
# as executables
chmod +x spotify-cli
chmod +x ./bin/*.sh
