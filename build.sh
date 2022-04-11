#!/bin/bash
rm -Rf dist

#Install dependencies
npm install

#Build project optimized for uat
echo "1. ----------> Building app optimized for uat"
npm run build
#npm prune --production

### mm/dd/yyyy ###
date +'%m%d%Y'
 
## Time in 12 hr format ###
date +'%H%M%S'
 
## backup dir format ##
backup_dir="INSURANCEFRONT"$(date +'%m%d%Y%H%M%S')".zip"
echo "${backup_dir}"

rm -rf packages/*.zip

cd dist/insurance-front-mc/

../../tools/zip a ../../packages/${backup_dir} * -r
