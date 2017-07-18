var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))


app.post('/SomeURL',function(req,res){
    console.log(req.body)
//  res.sendFile(path.join(__dirname+'/Public/index.html'));
    var fn = req.body.fn;
    var ln = req.body.ln;
    res.send("Posting Data--->"+fn+ln)
    res.end()
});
app.listen(5000);

app.get('/', function(req, res) {
//    var n1 = req.body.fn;
//    //var n2 = req.body.ln;
//    res.send('<h1>Hello</h1> '+n1);
    res.sendFile(path.join(__dirname+'/Public/index.html'));
});


//Different http modules: PUT,POST,GET,DELETE
//Difference between PUT and POST
//Difference between GET and POST
//Read about body parser
//Difference between res.write,res.send














