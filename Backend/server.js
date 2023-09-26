const express = require('express')
const mysql = require('mysql')
const cors = require('cors')


const app = express()
app.use(cors())


const db = mysql.createConnection({
   host : "localhost",
   user : "root",
   password : "",
   database : "tourism_destination"
})

app.get('/', (re, res)=> {
   return res.json('From server side!')
})


app.get('/api/destination', (req, res)=>{

   const {id} = req.query
   if(id){
      const query_sql = "SELECT * FROM destination_table WHERE place_id = ?"
      db.query(query_sql, [id], (err, data)=>{
         if(err){
            return res.json(err)
         }
         else{
            return res.json(data)
         }
      })
   }else{

      const query_sql = "SELECT * FROM destination_table"
      db.query(query_sql, (err, data)=>{
         if(err){ 
            return res.json(err)
         }
         return res.json(data)
      })
   }
})


app.listen(8083, ()=>{
   console.log('ready to listening')
})


