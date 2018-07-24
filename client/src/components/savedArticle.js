import React from "react";
import axios from "axios";

const SavedArticle = (props)=>{

    this.deleteItem = ()=>{
        console.log("i am going to be deleted");
      var deleteId = props.id;
        console.log(deleteId);
        axios.delete("/api/articles", {data: {
            id:deleteId
         }}).then(()=>{
            console.log("deleted!");
            alert("Item was deleted!");
        }).catch(err=>{
            console.log(err);
        });


    }
    
    return(
        <div>
            <h4>{props.title}</h4>
            <h5>{props.date}</h5>
            <a href={props.url}  className="btn waves-effect waves-light btn-small center-align valign-wrapper" target="_blank">Link to article </a>
            <a onClick={this.deleteItem} className="btn waves-effect waves-light btn-small center-align valign-wrapper" target="_blank">delete Article </a>

        </div>
    )
}

export default SavedArticle;