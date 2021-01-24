#!/bin/bash

# Virtualenv setup
if ! command -v virtualenv; then
  echo "No virtualenv installed. Installing now.\n"
  pip3 install virtualenv &>/dev/null
else
  echo "Virtualenv is installed.\n"
fi

# .venv setup
if [ ! -d "./.venv" ]; then
  echo ".venv dir not setup, setting up now.\n"
  virtualenv -p python3 ./.venv &>/dev/null
else
  echo ".venv dir is setup.\n"
fi

# Ensure that we install the pip dependencies
echo '''
Sourcing virtualenv and installing pip dependencies.
This may take a few moments.
'''
source .venv/bin/activate
pip install -r requirements.txt &>/dev/null
