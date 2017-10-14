require('newrelic')
var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res){
  res.render("index.html");
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
