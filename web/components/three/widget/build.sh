#!/usr/bin/env bash

set -euxo pipefail

npm install

./node_modules/.bin/tsc --project tsconfig.json
