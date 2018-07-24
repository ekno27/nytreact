import React from "react";
import { Link, Route } from "react-router-dom";
import Saved from "./saved";
import Results from "./results";
import axios from "axios";


class Search extends React.Component{

  state = {
    articles: [],
    articleName: "",
    startDate: "",
    endDate: ""
  }

  click = ()=>{
    console.log("i am clicked");
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    //adding necessary elements
    queryURL += '?' + "api-key=9bad9faf5c784cbcbb0689c2b9df8070" + "&q="+this.state.articleName.replace(" ", "%20");
  
    axios.get(queryURL).then(res=>{
        console.log(res.data.response.docs);
        this.setState({articles: res.data.response.docs});

    
      }).catch(err =>{
          console.log(err);
      });
  }

  handleNameChange = (event)=>{
    this.setState({articleName:event.target.value});
  }

  handleStartDate = (event)=>{
  
    this.setState({startDate: event.target.value});
  }
  handleEndDate= (event)=>{
    this.setState({endDate: event.target.value});
  }

  render(){

    

    return(
        <div>
            
            <div className="row">
        <div className="input-field col s12">
          <input onChange={this.handleNameChange}id="articleName" type="text"
          placeholder="Enter Article" 
          className="validate"/>
       
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input onChange={this.handleStartDate} id="startDate" placeholder="Start date" type="text" className="validate"/>
         
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input onChange={this.handleEndDate} id="endDate" type="text" className="validate" placeholder="End Date"/>
        </div>
      </div>

      <a onClick={this.click}  className= "btn waves-effect waves-light btn-large center-align valign-wrapper" >Submit</a>
      
      <Link to="/saved" role="a" className= "btn waves-effect waves-light btn-large center-align valign-wrapper"> See Saved Articles</Link>
      
      
      <Results items={this.state.articles}></Results>

       <Route exact path={`/saved`} component={Saved} />
           
        </div>)
  }
  

}

export default Search;
