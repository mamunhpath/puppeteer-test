const puppeteer = require("puppeteer");

// Get title

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://prothomalo.com');
//   const title = await page.title();
//   console.log("Page Title : "+title);

//   await browser.close();
// })();

// Get all style

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://prismbuilder.com", { timeout: 0 });

  const getAppliedStyle = await page.$eval(
    ".droip-heading-addon",
    (element) => {
      // getComputedStyle(el).getPropertyValue("display")

      // const stylesObject = getComputedStyle(el);
      // // return stylesObject;
      // const styles = {};
      // for (const prop in stylesObject) {
      //   if (stylesObject.hasOwnProperty(prop)) {
      //     // console.log("working");
      //     styles[prop] = stylesObject[prop];
      //   }
      // }
      // return styles;

      var styles = window.getComputedStyle(element);
      var inlineStyles = element.getAttribute("style");

      var retval = {};
      for (var i = 0; i < styles.length; i++) {
        var key = styles[i];
        var value = styles.getPropertyValue(key);

        element.style.setProperty(key, "unset");

        var unsetValue = styles.getPropertyValue(key);

        if (inlineStyles) element.setAttribute("style", inlineStyles);
        else element.removeAttribute("style");

        if (unsetValue !== value) retval[key] = value;
      }

      return retval;
    }
  );

  console.log(getAppliedStyle);

  await browser.close();
})();
