#!/bin/bash
rm -Rf dist

#Install dependencies
npm install

#Build project optimized for uat
echo "1. ----------> Building app optimized for uat"
npm run build
#npm prune --production
