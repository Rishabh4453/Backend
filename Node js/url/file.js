const url=require('url');
const http=require('http');
const fs=require('fs');
    const da=  new Date();
    console.log(da);
let server = http.createServer((request, response) => {
    fs.appendFile('serverlog.txt', `${da} &${request.url} new request\n`, (err) => {
        if(err) {
            throw err;
        }});
    //console.log(request);
    response.write("<H1>Welcome to my server</H1>");
    console.log(request.url);
    response.end();
});
server.listen(8000,'localhost',(err) => {
    if(err){
        console.log("E
    else{
        console.log("Server is running on http://localhost:8000");
    }
})