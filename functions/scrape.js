const puppeteer=require('puppeteer');

async function Scrape(quest,keywrd){
    const browser=await puppeteer.launch({headless:true});
    const page=await browser.newPage();
    await page.goto(quest);
    let keyword=keywrd.toLocaleLowerCase();
    const data=await page.evaluate((keyword)=>{
        const list=[];
        const elements=Array.from(document.querySelectorAll("body *"));

        elements.forEach(e=>{
            if((e.innerText).toLocaleLowerCase().includes(keyword)){
                list.push({
                    content:e.innerText,
                    element:e.tagName
                });
            }
        })
        
        return list

    },keyword);
    
    await browser.close();
    return data;
};

module.exports={
    Scrape
}