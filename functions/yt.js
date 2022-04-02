const puppeteer = require('puppeteer');

async function YT(title){
    const browser = await puppeteer.launch({ headless:true});
    const page = await browser.newPage();
    await page.goto(`https://www.youtube.com/results?search_query=${title}`);
    await page.waitForSelector('.yt-simple-endpoint.style-scope.ytd-video-renderer');
    const link=await page.evaluate(()=>{
        return document.querySelector('.yt-simple-endpoint.style-scope.ytd-video-renderer').href;
    });
    await browser.close();
    console.log(link);
};

module.exports={
    YT
}