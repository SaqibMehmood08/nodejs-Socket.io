var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);
eventEmitter.once('onceEvent', () => {
    console.log('This event listener will be executed only once!');
  });
  const listenerToRemove = () => {
    console.log('This listener will be removed.');
  };
  eventEmitter.addListener('scream', listenerToRemove);
  eventEmitter.emit('scream');

//Fire the 'scream' event:
eventEmitter.emit('scream');
eventEmitter.emit('onceEvent');

