const config = require('./config/config.json');
const fs = require('fs');
const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

if (!fs.existsSync(config.directory)){
  fs.mkdirSync(config.directory);
}

(async () => {
  try{
    const browser = await puppeteer.launch({
      headless: true,
      ignoreHTTPSErrors: true,
      timeout: 1000
    });

    const page = await browser.newPage();
    await page.emulate(devices[config.device]);
    
    for(let i = 0; i < config.urls.length; i++){
      let fileName = config.fileNames[i] || new Date();
      
      console.log('Taking screenshot of ' + config.urls[i]);

      await page.goto(config.urls[i]);
      await page.setJavaScriptEnabled(true);
      await page.screenshot({
        path: config.directory + fileName + config.fileType,
        fullPage: true
      });
    }

    browser.close();

    console.log('\x1b[32mSussessfully took ' + config.urls.length + ' screenshots!\x1b[0m');
  }
  catch(e) {
    return void console.log('\x1b[31m', e, '\x1b[0m');

  }
})();