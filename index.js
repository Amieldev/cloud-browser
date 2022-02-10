const express=require('express');
const app=express();
const port=process.env.PORT||5000;
const {Search}=require('./functions/search');
const {Translate}=require('./functions/translate');

app.use(express.static('web'));
app.use(express.json());

app.get('/',(req,res)=>{

});

app.post('/search',async (req,res)=>{
    const {text}=req.body;
    const answer=await Search(text);
    res.json({text:answer});
});

app.post('/translate', async(req,res)=>{
    const {lang}=req.body;
    const {text}=req.body;
    const answer=await Translate(lang,text);
    res.json({text:answer});
});

app.listen(port,()=>console.log(`Opened at port:${port}`));