const express = require('express');
const bodyParser = require('body-parser');
const Post = require('./models/post');
const mongoose = require("mongoose")

const app =  express();

mongoose.connect("mongodb+srv://Randy:0Ltderrjwqezrvyo@cluster0-2pn0l.mongodb.net/node-angular?retryWrites=true",  {useNewUrlParser: true})
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((_e) => {
    console.log(_e + 'Connection failed!');
  });

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

//0Ltderrjwqezrvyo

app.post('/posts', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save();
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
