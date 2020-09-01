const express = require('express');
const app = express();

app.get('/teste3',(req,res) => {
  return res.json({hello: 'world 333'});
});

app.listen('3333');   