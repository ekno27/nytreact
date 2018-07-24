import React from "react";
import axios from "axios";

const SavedArticle = (props)=>{

    const deleteItem = ()=>{


    }
    console.log(props);
    return(
        <div>
            <h4>{props.title}</h4>
            <h5>{props.date}</h5>
            <a href={props.url}  className="btn waves-effect waves-light btn-small center-align valign-wrapper" target="_blank">Link to article </a>
        </div>
    )
}

export default SavedArticle;