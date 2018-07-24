import React from "react";
import axios from "axios";
import SavedArticle from "./savedArticle";


class Saved extends React.Component{
    state = {
        articles: []
    }
    componentDidMount(){
        

        axios.get("/api/articles").then(res=>{
            this.setState({articles:res.data})
        });

    }

    render(){
        console.log(this.state.articles);
        return(

            <div>

                <h2 className="center-align"> Saved Articles</h2>
                {this.state.articles.map((item, key)=>{
                    return( <SavedArticle title={item.title}
                        date={item.date}
                        id={item._id}
                        key={key}
                        url={item.url}/>)  
                })}
            </div>
        );
    }
}
 
   
       
    


export default Saved;