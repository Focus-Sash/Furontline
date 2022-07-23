#!/bin/bash
title=$1
filename=$2
category=$3
path="${category}/${filename}.md"
date=`date '+%F'`
touch ${path}
echo "---" >> ${path}
echo "title: '${title}'" >> ${path}
echo "date: '${date}'" >> ${path}
echo "tags:" >> ${path}
echo "category: '${category}'" >> ${path}
echo "---" >> ${path}
echo "" >> ${path}
