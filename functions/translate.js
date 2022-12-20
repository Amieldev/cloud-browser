const puppeteer = require('puppeteer');

async function Translate(lang,text){
    const browser = await puppeteer.launch({ headless:true});
    const page = await browser.newPage();
    await page.goto(`https://translate.google.com.et/?hl=en&tab=wT&sl=auto&tl=${lang}&text=${text}&op=translate`);
    await page.waitForSelector(".ryNqvb");
    const answer = await page.evaluate(() => {
        return document.querySelector(".ryNqvb").innerText;
    });
    await browser.close();
    return answer;
};

module.exports = {
    Translate
}
