import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Head from "./components/head";
import Search from "./components/search";
import "./App.css";
import Saved from "./components/saved";


const App = () => {
  
    return (
      <Router>
        
       <div>
         <Head></Head>
         <div className="container">
         
         <Route exact path="/" component={Search}/>
        <Route exact path="/saved" component={Saved}/>
         </div>
       </div>

       
       
      </Router>
      
    );
  
}

export default App;
