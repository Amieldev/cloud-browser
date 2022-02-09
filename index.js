const express=require('express');
const app=express();
const port=process.env.PORT||5000;
const {Search}=require('./functions/search');
const {SSR}=require('./functions/ssr');

app.use(express.static('web'));
app.use(express.json());

app.get('/',(req,res)=>{

});

app.get('/ssr',(req,res)=>{
    (async ()=>{
        const html =await SSR('http://localhost:5000');
        console.log(html);
        res.send(html);
    })();
});

app.post('/ask',async (req,res)=>{
    const {text}=req.body;
    console.log(`quest:${text}`);
    const answer=await Search(text);
    console.log(`answer:${answer}`);
    res.json({text:answer});
});

app.listen(port,()=>console.log(`Opened at port:${port}`));