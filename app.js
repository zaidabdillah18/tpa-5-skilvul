require("dotenv").config();

const express = require('express'),
      app = express(),
      bodyParser = require('body-parser');
//ini nyambung ke file routes
const todoRouter = require('./routes/todo')
const UserRouter = require('./routes/user')
const port = 3000;


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/",(req,res)=>{
//   res.send("hello")
// })
app.use("/todo", todoRouter);
app.use("/user", UserRouter);

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})