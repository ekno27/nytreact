import React from "react";
import axios from "axios";

const Article = (props)=>{
    this.save = ()=>{
        console.log("Saving post....");
        axios.post("/api/articles",{
            title:props.headline,
            date:props.pub_date,
            url: props.url
        }).then(()=>{console.log("Data has been added!");
        alert("Article has been saved!");
    });
    
    }
    
    return(
        <li className="collection-item"><div>{props.headline} <a className="secondary-content "href="#" onClick={this.save}><i className="material-icons">save</i>  </a></div></li>
    
        
       

    );
    

}
export default Article;