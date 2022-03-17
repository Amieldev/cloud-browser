const puppeteer = require('puppeteer');

async function Img(quest,number) {
    const browser = await puppeteer.launch({ headless:false});
    const page = await browser.newPage();
    await page.goto(`https://search.brave.com/images?q=${quest}`, { waitUntil: 'load', timeout:0});
    await page.waitForSelector(".image.svelte-qd248k");
    const amount=number;
    const srcs=await page.evaluate((amount)=>{
        const imgsrcs=[];
        const imgs=Array.from(document.querySelectorAll(".image.svelte-qd248k"));
        imgs.forEach(img=>{
            if(imgs.indexOf(img)<amount){
                imgsrcs.push(img.src);
            }
        })
        return (imgsrcs);
    },amount);
    await browser.close();
    return srcs
}

module.exports={
    Img
}