const EventEmiter= require('events')


const  CustumEmitter=new EventEmiter;

CustumEmitter.on('response',(name,email)=>{
console.log( `name is: ${name} and email is ${email}`)

});
CustumEmitter.on('response',()=>{
console.log('Emiiter')

});

CustumEmitter.emit('response','saqib' ,'saqi@mail');