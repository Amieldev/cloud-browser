const puppeteer = require('puppeteer');

async function Img(quest){
    const browser = await puppeteer.launch({ headless:true});
    const page = await browser.newPage();
    await page.goto(`https://www.google.com/search?q=${quest}&tbm=isch&tbs=isz:l&rlz=1C1GCEA_enET998ET998&hl=en&sa=X&ved=0CAIQpwVqFwoTCNjq8KTgqfcCFQAAAAAdAAAAABAF&biw=1349&bih=625`);
    await page.waitForSelector(".rg_i.Q4LuWd");
    const imgs = await page.evaluate(() => {
      const srcs=[];
      const images=Array.from(document.querySelectorAll(".rg_i.Q4LuWd"));

        images.forEach(img=>{
          if(img.src!==''){
            srcs.push(img.src);
          }
        })

        return srcs;

    });
    await browser.close();
    return imgs;
};

module.exports = {
  Img
}

// Img('spider man').then(res=>console.log(res))