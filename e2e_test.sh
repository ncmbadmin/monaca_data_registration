#!/bin/bash
#HungNV 2021
# sh ./e2e_test.sh

echo ">>> Installing dependencies..."
npm install

echo ">>> Run localhost..."
echo ">>> Opening Cypress node module..."
npm run dev & ./node_modules/.bin/cypress open