const express = require('express');
const bodyParser = require('body-parser');

const app =  express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(( req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.post('/posts', (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({ /**status 201: everything is allright and something is added */
    message: 'Post added succesfully'
  });
});

app.get('/posts', (req, res, next) => {
  const posts = [
  {
    id: "123",
    title: "First server-side post",
    content: "This is coming from the server side"
},
  ];
res.status(200).json({
  message: "post sent succesfully",
  posts: posts
});
});

module.exports = app;
