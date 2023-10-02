const express = require('express')
require('dotenv').config()
const { default: mongoose } = require('mongoose')
const app = express()


const PORT = process.env.PORT || 8083

mongoose
   .connect(process.env.MONGODB_URI)
   .then(()=>{
      console.log('Success connect to mongodb')
   })
   .catch((err)=>{
      console.log('Cannot connect to mongodb : ',err)
   })


app.listen(PORT, ()=>{
   console.log('server running on port : ', PORT)
})