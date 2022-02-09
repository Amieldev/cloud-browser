const puppeteer=require('puppeteer');

async function Search(quest){
    const browser=await puppeteer.launch({headless:true});
    const page=await browser.newPage();
    await page.goto(`https://www.google.com/search?q=${quest}`);
    // await page.screenshot({path:'pic.png'});
    const answer=await page.evaluate(() => {
    return document.querySelector('.hgKElc').innerText||"couldn't find the answer";
});
    await browser.close();
    return answer;
};

module.exports={
    Search
}