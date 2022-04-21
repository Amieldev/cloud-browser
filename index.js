const express=require('express');
const app=express();
const port=process.env.PORT||5000;
const {Search}=require('./functions/search');
const {Translate}=require('./functions/translate');
const {YT}=require('./functions/yt');
const {Scrape}=require('./functions/scrape');

app.use(express.static('web'));
app.use(express.json());

app.get('/',(req,res)=>{

});

app.get('/search',async (req,res)=>{
    const {text}=req.query;
    const answer=await Search(text);
    res.send(answer);
});

app.get('/translate', async(req,res)=>{
    const {lang}=req.query;
    const {text}=req.query;
    const answer=await Translate(lang,text);
    res.send(answer);
});

app.get('/yt',async(req,res)=>{
    const {title}=req.query;
    const link=await YT(title);
    res.send(link);
});

app.get('/scrape',async (req,res)=>{
    const web_url=req.query.web_url;
    const keyword=req.query.keyword;
    const content=await Scrape(web_url,keyword);
    res.send(content);
});

app.listen(port, () => console.log(`Cloud-Browser is listening.`));
