
2
3
4
5
6
7
8
9
10
11
12
13
const express = require('express');
const app = express();
const server = require('http').Server(app);
 
app.use(express.static(__dirname + '/public'));
 
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
 
server.listen(3333, function () {
  console.log(`Listening on ${server.address().port}`);
});