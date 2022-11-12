require("dotenv").config();

const express = require('express'),
      app = express(),
      bodyParser = require('body-parser');
//ini nyambung ke file routes
const todoRouter = require('./routes/todo')
const UserRouter = require('./routes/user')
const port = process.env.PORT || 3000;


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use("https://tpa5-todolist-skilvul-zaid.herokuapp.com/todo", todoRouter);
app.use("https://tpa5-todolist-skilvul-zaid.herokuapp.com/user", UserRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})