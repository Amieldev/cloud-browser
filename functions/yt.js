const puppeteer = require('puppeteer');

async function YT(title){
    const browser = await puppeteer.launch({ headless:true});
    const page = await browser.newPage();
    await page.goto(`https://www.youtube.com/results?search_query=${title}`);
    await page.waitForSelector('.yt-simple-endpoint.style-scope.ytd-video-renderer');
    const links=await page.evaluate(()=>{
        const videos=Array.from(document.querySelectorAll('.yt-simple-endpoint.style-scope.ytd-video-renderer'));
    
        const urls=[];

         videos.forEach(video=>{
            if(videos.indexOf(video)<100&&video.href!==""){
                urls.push(video.href);
            }
        });

        return urls


    });
    await browser.close();
    return links;
};

module.exports={
    YT
}