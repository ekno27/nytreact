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
    
    return(<div>
        <h5>{props.headline}  <a className="btn waves-effect waves-light btn-small center-align valign-wrapper" onClick={this.save}> Save </a></h5>
        
       

    </div>);
    

}
export default Article;