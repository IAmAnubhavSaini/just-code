#!/usr/bin/env bash

set -euxo pipefail

cd ../widget/

chmod u+x build.sh

./build.sh

cp -r build/ ../consumer\

cd ../consumer

npx http-server --port 8484 --cors
