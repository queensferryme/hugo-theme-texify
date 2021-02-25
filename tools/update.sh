#!/bin/bash

git clone https://github.com/gohugoio/hugoBasicExample.git
rm -rf exampleSite/content
mv hugoBasicExample/content exampleSite
rm -rf hugoBasicExample

