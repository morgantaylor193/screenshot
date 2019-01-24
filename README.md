# Screenshot
A simple tool to parse an array of urls, take screenshots of those URL's and then save them locally.

## Run
`npm run screenshot`

## Config
#### Device
`string = 'iPhone X'`  
A list of device options can be found here https://github.com/GoogleChrome/puppeteer/blob/master/DeviceDescriptors.js

#### directory
`string = 'screenshots/'`  
Define where you would like to store your screenshots.

#### fileType
`string = '.jpg'`  
Define what file format you would like to save your screenshots as.

#### urls
`string[] = ['https://www.google.com']`  
Define the URL's you would like to pass. Be sure to inclue the full url with the protocol.

#### fileNames
`?string[] = []`  
Optional - Define a unique name for each screenshot file. If not passed in the current date will be used.
