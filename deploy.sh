#!/bin/bash

# make file executable
set -e

instructions ()
{
  echo "************************************************"
  echo "Run this script as an npm task                 *"
  echo "$ npm run deploy bucket                        *"
  echo "env: eg. stage, prod                           *"
  echo "for example: $ npm run deploy bucket.iogym.com *"
  echo "************************************************"
}

echo $1
if [ $# -eq 0 ]; then
  instructions
  exit 1
elif [ $# -eq 1 ]; then
  BUCKET=$1
else
  instructions
  exit 1
fi

DIST="dist"

# clean the bucket
echo "Clean the bucket from previous vomit"
aws s3 rm s3://$BUCKET --recursive

# sync to the S3 bucket
# aws-cli is needed
echo "Copying files over to S3"
aws s3 sync ./$DIST s3://$BUCKET --acl public-read

# echo "🚀 🚀 🚀 🚀 🚀 "
