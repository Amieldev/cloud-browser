const text=document.querySelector('.text');
const btn=document.querySelector('.btn');

btn.onclick=()=>{
    ask(text.value);
};

text.onkeypress=(e)=>{
    if(e.keyCode==13){
        ask(text.value);
    }
};

async function ask(quest){
    const answer=await fetch('/ask',{
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            text:quest
        })
    });
    const ans=await answer.json();
    alert(ans.text)
}