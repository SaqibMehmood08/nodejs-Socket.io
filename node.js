// const name= require('./index')
// console.log(name.app)
const os=require('os')

const userInfo=os.userInfo();

console.log(userInfo);
console.log(`${os.uptime()}`);


const op={
    name:os.type(),
    release:os.release(),
}

console.log(op)