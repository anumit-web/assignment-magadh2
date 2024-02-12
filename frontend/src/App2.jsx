import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App2.css";
import CustomerPage from './CustomerPage.jsx';
import AuthorPage from './AuthorPage.jsx';

// npm run dev

function App2() {
  console.log("Inside App2.jsx");
  const [count, setCount] = useState(0);

    let isLoggedIn = true;
    let isCustomer = true;
    //let isCustomer = false;
    let isAuthor = false;
    //let isAuthor = true;
    let isAdmin = false;

  
  if (isLoggedIn == true) {
        if(isCustomer == true) {
            return <CustomerPage />;   
            //return <p>Customer</p>;   
        }
        if(isAuthor == true) {
            return <AuthorPage />;   
        }
        if(isAdmin == true) {
            return <AdminPage />;
        }
    }
   
  // return <p>Hello </p>;


  return (
    <>
      <div>
                <p> 
                  Hello from App2
                </p>    
            </div>
    </>
  );

}

export default App2;
