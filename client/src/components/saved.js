import React from "react";
import axios from "axios";
import SavedArticle from "./savedArticle";
import Search from "./search";
import { Link, Route } from "react-router-dom";


class Saved extends React.Component{
    state = {
        articles: []
    }
    
    dbCall = ()=>{
        axios.get("/api/articles").then(res=>{
            this.setState({articles:res.data})
        });

    }
    deleteItem = (deleteId)=>{
        console.log("i am going to be deleted");
      
        console.log(deleteId);
        axios.delete("/api/articles", {data: {
            id:deleteId
         }}).then(()=>{
            console.log("deleted!");
            this.dbCall();
            
        }).catch(err=>{
            console.log(err);
        });


    }
    
    componentDidMount(){

        this.dbCall();
        
       

    }

    render(){
       


        return(

            <div>

                <h2 className="center-align"> Saved Articles</h2>
                <ul className="collection">
                {this.state.articles.map((item, key)=>{
                    return(
                        <SavedArticle delete={this.deleteItem} title={item.title}
                        date={item.date}
                        id={item._id}
                        key={key}
                        url={item.url}/>
                     )  
                })}
                
                </ul>
               
                
                
                <Link to="/" role="button" id="search-more" className= "  btn waves-effect waves-light btn-large center-align valign-wrapper center-align"> Search for more articles</Link>
                <Route exact path={`/`} component={Search} />
            </div>
        );
    }
}
 
   
       
    


export default Saved;