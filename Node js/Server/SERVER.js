const fs=require('fs');
const http=require('http');
const url=require('url');
const server=http.createServer((req,res)=>{
    const parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl);
    const da=new Date();
    console.log(da);
    fs.appendFile("serlog.txt",`${da} ${req.url} new request received \n`,(err)=>{
        if(err) console.log(err);
        console.log("new file created! !")
    })
    res.write("<h1>welcome to our website</h1>");
    res.end();
});
server.listen(8000,'localhost',(err)=>{
    if(err){ console.log(err);}
    else{console.log("server started successfully http://localhost:8000");}
});
