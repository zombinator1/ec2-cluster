#!/bin/bash

docker build -t zombinator/blog-front:1.1 .

$docker push zombinator/blog-front:1.1