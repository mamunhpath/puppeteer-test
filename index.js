const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://prothomalo.com');
  const title = await page.title();
  console.log("Page Title : "+title);

  await browser.close();
})();