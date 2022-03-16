const express=require('express');
const app=express();
const port=process.env.PORT||5000;
const {Search}=require('./functions/search');
const {Translate}=require('./functions/translate');
const {Img}=require('./functions/image');

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

app.get('/image',async(req,res)=>{
    const {text}=req.query;
    const {amount}=req.query;
    const imgList=await Img(text,amount);
    res.send(imgList);
});

app.listen(port, () => console.log(`Server listening.`));