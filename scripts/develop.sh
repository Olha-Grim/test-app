#!/bin/bash

echo "Preparing..."
npm uninstall test-vendor

if $CORE_VENDOR
  then
    echo "Linking vendors..."
    npm link test-vendor
    npm link test-app
  else
    echo "Installing latest remote app vendor..."
    npm install "$REPO_TEST_APP"
    echo "Linking UI vendor..."
    npm link test-vendor
fi

echo "Starting development server..."
craco start