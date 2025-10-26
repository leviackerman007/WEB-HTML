const fs=require('fs')
const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url==='/' && req.method==='GET'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<h1>Welcome to home page</h1>')    
    }
    else if(req.url==='/create' && req.method==='POST'){
        fs.writeFile("./create.txt","This has been created using /create request",(err)=>{
            if(err){
                res.writeHead(500,{'Content-Type':'text/html'});
                res.end('<h1>Error creating file</h1>')
            }else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.end('<h1>File Created</h1>')
            }
        });
    }
    else if(req.url==='/read' && req.method==='GET'){
        fs.readFile("./create.txt",'utf-8',(err,data)=>{
            if(err){
                res.writeHead(404,{'Content-Type':'text/html'});
                res.end('<h1>File not found </h1>');
            }else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.end(`<h1>Content inside : ${data}</h1>`)
            }
        })
    }
    else if(req.url==='/update' && req.method==='PUT'){
        fs.appendFile('./create.txt','\n This is another file',(err)=>{
            if(err){
                res.writeHead(404,{'Content-Type':'text/html'});
                res.end('<h1> File note found </h1>');
            }else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.end('<h1> Line appended </h1>');
            }
        })
    }
    else if(req.url==='/delete' && req.method==='DELETE'){
        fs.unlink('./create.txt',(err)=>{
            if(err){
                res.writeHead(404,{'Content-Type':'text/html'});
                res.end('<h1> File note found </h1>');
            }else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.end('<h1> File Deleted </h1>');
            }
        })
    }
});



server.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
});