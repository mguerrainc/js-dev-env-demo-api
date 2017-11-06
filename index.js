var express =  require('express');
var cors = require('cors');

const app = express();
app.use(cors());

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.send('Hello World!')
});

app.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database server
  res.json([
    {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
    {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}
  ]);
});

app.get('/labels', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"name":"US Magnesium (pallets only)","pallets":"Y","master":"N"},
    {"id": 1,"name":"Dow (pallets and master)","pallets":"Y","master":"Y", "masterCopies": 1},
    {"id": 1,"name":"Toyota (master only)","pallets":"N","master":"Y", "masterCopies": 2}
  ]);
});

app.get('/pallets', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"lotNo": 17123060112},
    {"id": 2,"lotNo": 17123060113},
    {"id": 3,"lotNo": 17123060114}
  ]);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port')); 
});