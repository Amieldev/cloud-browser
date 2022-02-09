const puppeteer = require('puppeteer');

async function SSR(quest) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(quest);
    // await page.screenshot({path:'pic.png'});
    const answer = await page.evaluate(() => {
        return document.querySelector('.app').innerHTML;
    });
    await browser.close();
    return answer;
};

module.exports = {
    SSR
}