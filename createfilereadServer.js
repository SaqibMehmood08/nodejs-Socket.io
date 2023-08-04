const http= require('http')
const fs= require('fs')

const server = http.createServer((req,res)=>{
    // const text=fs.readFileSync('big.txt','utf-8')
    // res.end(`<h6>${text}</h6>`)
    const fileStream=fs.createReadStream('big.txt','utf-8')
    fileStream.on('open',()=>{
        fileStream.pipe(res);
        
    })
    fileStream.on('error',(error)=>{
        console.log(error)
        // res.end(error)
        
    })
});

server.listen(3000,()=>{
    console.log("Listening");

});


