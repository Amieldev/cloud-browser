const prompt=require('prompt-sync')();
const fs=require('fs');
const {Search}=require('./functions/search');

const question=prompt('Question:');

ask(question)

async function ask(req){
const answer=await Search(req);
fs.writeFileSync('answer.txt',answer);
console.log(answer);
}