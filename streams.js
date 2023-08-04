const { Readable } = require('stream');

// Custom Readable stream
class MyReadableStream extends Readable {
  constructor(options) {
    super(options);
    this.data = ['Hello', 'World', 'Stream'];
    this.index = 0;
  }

  // Implementation of the _read method is required for custom Readable streams
  _read(size) {
    if (this.index >= this.data.length) {
      // No more data to read, push null to signal the end of the stream
      this.push(null);
    } else {
      // Push the data to the stream
      this.push(this.data[this.index]);
      this.index++;
    }
  }
}

// Create an instance of the custom Readable stream
const myReadable = new MyReadableStream();

// Event: 'data'
myReadable.on('data', (chunk) => {
  console.log('Received data chunk:', chunk.toString());
});

// Event: 'end'
myReadable.on('end', () => {
  console.log('Stream ended.');
});
