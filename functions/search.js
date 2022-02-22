const puppeteer=require('puppeteer');

async function Search(quest){
    const browser=await puppeteer.launch({headless:true});
    const page=await browser.newPage();
    await page.goto(`https://www.google.com/search?q=${quest}`);
    const answer=await page.evaluate(() => {
    const mainArticle=document.querySelector('.hgKElc');
        const miniArticle=document.querySelector('.kno-rdesc').querySelector('span');
        if(mainArticle){
            return mainArticle.innerText;
        }
        else if(miniArticle){
            return miniArticle.innerText
        }else{
            return "Couldn't find the result,try rephrasing the question";
        }
});
    await browser.close();
    return answer;
};

module.exports={
    Search
}