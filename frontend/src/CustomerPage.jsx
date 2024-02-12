import { useState } from "react";
import axios from "axios";
import { useEffect } from 'react';
//import "./App2.css";
import styles from "./CustomerPage.module.css";


// npm run dev

// const divStyle2 = {
//   display: flex,
//   //column-gap: "20px";
// };

function CustomerPage() {
  console.log("Inside CustomerPage.jsx");
  const [count, setCount] = useState(0);
  const [books, setBooks] = useState(null);

  const baseURL = "http://44.211.140.27:3000/api/getallbooks";

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setBooks(response.data);
      console.log(response.data); 
    });
  }, []);
  
  const shoot = () => {
    alert("Great Shot!");
  }

  const purchaseThisBook = () => {
    //alert("Great Shot!");
    console.log("Inside purchaseThisBook");
  }

  const purchaseThisBook2 = (a, b) => {
      alert("purchaseThisBook2=" + b);
      console.log("Inside purchaseThisBook");
      //console.log(loggedInUserId);
      console.log(a);
      console.log(b);
      
  }
  
  const purchaseThisBook3 = (a, b, e) => {
      e.preventDefault();
      alert("purchaseThisBook3=" + b);
      console.log("Inside purchaseThisBook");
      //console.log(loggedInUserId);
      console.log(a);
      console.log(b);


      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
      };

      let postUrl = "http://44.211.140.27:3000/api/purchase/" + b;

      axios.post(postUrl, {
        title: "Hello World!",
        body: "This is a new post."
      }, axiosConfig)
      .then((response) => {
        setPost(response.data);
      });
      
  }
  
  // return <p>Customer</p>; 

  //console.log({books.title});

  
  // return (
  //   <>
  //     <div>
  //               <p> Customer page
  //               </p>    
  //     </div>
  //   </>
  // );
  

 
 // return (
 //    <>
 //      <h1>Print books</h1>
 //      <ul>
 //        {books.map((row1) => <li>I am a { row1.bookId }</li>)}
 //      </ul>
 //    </>
 //  );
  
// <div style={{fontFamily:"Inter" }, {fontSize:"20px"}}> 

return (
    <>
    <h1 className={styles.h1_style_1}>List of books available to purchase at our Bookstore</h1>
    <br /><br />
    {books.map((row1) =>
    <div className={styles.div1_style}>        
        <div className={styles.div2_style}>  
          <div>
            <span className={styles.hide_it}>{ row1.bookId } </span>
            <img src={row1.image_url} className={styles.image_style} alt="react logo" />  
          </div>
          <div>
            <div><h2>{row1.title}</h2></div>
            <div><h3>by {row1.authors}</h3></div>
            <div> {row1.description}</div>
          </div>
        </div>
        <div className={styles.div3_style}>          
           <button onClick={(event) => purchaseThisBook3("hi-3", row1.bookId, event)} className={styles.button1_style}>Purchase this book </button>
        </div>
    </div>      
    )} 
    </>
  );
 


}

export default CustomerPage;

