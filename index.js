const express = require('express'); //require express 
const app = express();
var port = 3000;
app.get('/', function(req, res) {
    res.send('<h1>hello Cuong</h1>');
})
app.get('/User', function(req, res) {
    res.send('User list');
})
app.listen(port, function() {
    console.log('Answer listening on port ' + port);
})