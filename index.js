const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url);
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));





// const Person = require('./person');

// const person = new Person("john", 30);
// person.greeting();

// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', data => console.log('Caller Listener', data));

// logger.log('Hello World');
// logger.log('Live Long And Prosper!');
// logger.log('Hi!');


