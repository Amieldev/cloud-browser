const puppeteer=require('puppeteer');

async function Search(quest){
    const browser=await puppeteer.launch({headless:true});
    const page=await browser.newPage();
    await page.goto(`https://www.google.com/search?q=${quest}`);
    const answer=await page.evaluate(() => {
    const article=document.querySelector('.hgKElc');
    return article?article.innerText:"Couldn't find the answer,try rephrasing the question."; 
});
    await browser.close();
    return answer;
};

module.exports={
    Search
}