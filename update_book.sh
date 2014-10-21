#!/bin/bash

TARGET=../intro2UnixandSGE_book
REPO=git@github.com:BIMSBbioinfo/intro2UnixandSGE

gitbook build -o "$TARGET"

cd "$TARGET"
git init
git commit --allow-empty "$@"
git checkout -b gh-pages
git commit -a "$@"
git push $REPO  gh-pages --force
