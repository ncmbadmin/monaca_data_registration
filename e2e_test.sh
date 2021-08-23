#!/bin/bash
#HungNV 2021
# sh ./e2e_test.sh

echo ">>> Installing dependencies..."
npm install

echo ">>> Run localhost and run test..."
npm run dev & npm run test