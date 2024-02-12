import express from 'express';
import cors from 'cors';
import mysql from 'mysql';

/*
const db = mysql.createConnection({
  host: "sql3.freemysqlhosting.net",
  user: "sql3681643",
  password: "X6caQaf2hF",
  database:"sql3681643" 
})
*/

const db = mysql.createConnection({
  //host: "44.211.140.27",
 host: "localhost",
  user: "someone",
  password: "password",
  database:"sql3681643" 
})


const app = express();
const  PORT = 3000;
app.use(cors());
app.use(express.json())


/**
 * ANUMIT JOOLOOR
 * START
 */

// 1
// Route to get all books
app.get("/api/getAllBooks", (req,res)=>{
  db.query("SELECT * FROM Books", (err,result)=>{
      if(err) {
      console.log(err)
      } 
   // for debug only 
   // print list of all books
    console.log(result)
  
    res.send(result)
  });   
});
  
// 2
// Route to get  one book
app.get("/api/getOneBook/:id", (req,res)=>{
  const id = req.params.id;
  db.query("SELECT * FROM Books  WHERE bookid = ?", id, (err,result)=>{
      if(err) {
      console.log(err)
      } 
   // for debug only 
    console.log(result)

    res.send(result)
  });   
});

// 3
// Route to get all users
app.get("/api/getAllUsers", (req,res)=>{
  db.query("SELECT * FROM List_of_users", (err,result)=>{
      if(err) {
      console.log(err)
      } 
   // for debug only 
   // print list of all users 
    console.log(result)

    res.send(result)
  });   
});

// 4
// Route to get one user
app.get("/api/getOneUser/:id", (req,res)=>{
  const id = req.params.id;
  db.query("SELECT * FROM List_of_users WHERE user_id = ?", id, (err,result)=>{
      if(err) {
      console.log(err)
      } 
   // for debug only 
   // print list of all users 
    console.log(result)

    res.send(result)
  });   
});

// Route to like a post
app.post('/api/purchase/:id',(req,res)=>{

  const id = req.params.id;
  db.query("UPDATE Books SET sellCount = sellCount + 1 WHERE bookId = ?",id, (err,result)=>{
      if(err) {
       console.log(err)   
      } 
      console.log(result)
      });    
  });
  

/**
 * ANUMIT JOOLOOR
 * END
 */


app.listen(PORT, ()=>{
    console.log(`Server is running on {PORT}`)
})