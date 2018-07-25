import React from "react";
import Article from "./article";

const Results = (props) =>{
    
  
   var items = props.items.slice(0,5).map((items, key) => <Article url={items.web_url} pub_date={items.pub_date} headline={items.headline.main} snippet={items.snippet} key ={key} ></Article>);

    
    return(
        
        <div>
            <ul className="collection">
            {items}
            </ul>
        </div>
        );


    
}
export default Results;