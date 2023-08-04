const {createReadStream}=require('fs')


const stream =createReadStream('./big.txt',{encoding:'ascii'})

stream.on('data',(result)=>{
    console.log(`${result}`)
})
stream.on('error',(error)=>{
    console.log(`ERROR is:  ${error}`)
})