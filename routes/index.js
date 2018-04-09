var credential = require('../credential');
var express = require('express');
var router = express.Router();
var watson = require('watson-developer-cloud');

var conversation = watson.conversation(credential.watson.conversation);

router.get('/', function(req, res, next) {

  res.render('index');

});

router.post('/', function(req, res, next){

  var input = req.body;
  var txt = { text: input.text }
  workspace = credential.watson.conversation.workspace_id;
  conversation.message({workspace_id: workspace , input: txt}, function(err, response){
    if(err){
      console.log('Deu erro', err);
    }else{
      res.json(response);
    }
  })


})

module.exports = router;
