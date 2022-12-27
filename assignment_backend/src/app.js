const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const userRoute = require('./routes/userRoute')
const employeeRoute = require('./routes/employeeRoute')
const mongoose = require('mongoose')
const createProxyMiddleware = require("http-proxy-middleware")

const options = {
  origin: ["http://localhost:4200"],
  // methods: ['*']
};

app.use(cors(options));



app.use(express.json());


app.use('/users', userRoute);
app.use('/employee', employeeRoute);

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://admin:admin123@clusterassigned.eginxbz.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    app.listen(5000, () => {
      console.log(`Example app listening on port 5000`)
    })
  })
  .catch((error) => {
    console.log(error)
  });


