//const express = require('express');
import express from 'express';
// const db = require('./config/db')
//import db from './db';
import cors from 'cors';
//const mysql = require('mysql')
//import db from 'mysql';
//const mysql = require('mysql')

//const cors = require('cors')
//const mysql = require('mysql')
import mysql from 'mysql';

const db = mysql.createConnection({
host: "sql3.freemysqlhosting.net",
/*host: "54.215.148.52",*/
user: "sql3681643",
password: "X6caQaf2hF",
database:"sql3681643" 
})



const app = express();
const  PORT = 3000;
app.use(cors());
app.use(express.json())

// Route to get all posts
app.get("/api/get", (req,res)=>{
db.query("SELECT * FROM posts", (err,result)=>{
    if(err) {
    console.log(err)
    } 
 // forf debug only 
console.log(result)
  
res.send(result)
});   });

// Route to get one post
app.get("/api/getFromId/:id", (req,res)=>{

const id = req.params.id;
 db.query("SELECT * FROM posts WHERE id = ?", id, 
 (err,result)=>{
    if(err) {
    console.log(err)
    } 
    res.send(result)
    });   });

// Route for creating the post
app.post('/api/create', (req,res)=> {

const username = req.body.userName;
const title = req.body.title;
const text = req.body.text;

db.query("INSERT INTO posts (title, post_text, user_name) VALUES (?,?,?)",[title,text,username], (err,result)=>{
   if(err) {
   console.log(err)
   } 
   console.log(result)
});   })

// Route to like a post
app.post('/api/like/:id',(req,res)=>{

const id = req.params.id;
db.query("UPDATE posts SET likes = likes + 1 WHERE id = ?",id, (err,result)=>{
    if(err) {
   console.log(err)   } 
   console.log(result)
    });    
});

// Route to delete a post

app.delete('/api/delete/:id',(req,res)=>{
const id = req.params.id;

db.query("DELETE FROM posts WHERE id= ?", id, (err,result)=>{
if(err) {
console.log(err)
        } }) })

app.listen(PORT, ()=>{
    console.log(`Server is running on ＄{PORT}`)
})