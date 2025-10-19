
const fs=require('fs');

fs.writeFile("./files/test.txt","This is read by fs",(err)=>{
    if(err) throw err;
    console.log("File created successfully");


fs.readFile("./files/test.txt","utf-8",(err,data)=>{
    if(err) throw err;
    console.log(data);
    });
});