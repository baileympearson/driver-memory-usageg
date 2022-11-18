#! /bin/bash

echo "testing 4.11"
npm i mongodb@4.11.0 &> /dev/null
echo "v4.11.0" > 4.11.txt
node test.js >> 4.11.txt

echo "testing 4.12"
npm i mongodb@4.12.0 &> /dev/null
echo "v4.12.0" > 4.12.txt
node test.js >> 4.12.txt

echo "\n\nresults"
paste 4.11.txt 4.12.txt | column -t | tee results.txt 
rm 4.11.txt 4.12.txt
