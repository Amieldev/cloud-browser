const puppeteer = require('puppeteer');

async function Translate(lang,text){
    const browser = await puppeteer.launch({ headless:true});
    const page = await browser.newPage();
    await page.goto(`https://translate.google.com.et/?hl=en&tab=rT&sl=en&tl=${lang}&text=${text}&op=translate`);
    await page.waitForSelector(".J0lOec");
    const answer = await page.evaluate(() => {
        return document.querySelector(".J0lOec").innerText;
    });
    await browser.close();
    return answer;
};

module.exports = {
    Translate
}