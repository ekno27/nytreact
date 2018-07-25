import React from "react";


const SavedArticle = (props)=>{

//     this.deleteItem = ()=>{
//         console.log("i am going to be deleted");
//       var deleteId = props.id;
//         console.log(deleteId);
//         axios.delete("/api/articles", {data: {
//             id:deleteId
//          }}).then(()=>{
//             console.log("deleted!");
//             alert("Item was deleted!");
            
//         }).catch(err=>{
//             console.log(err);
//         });


//     }
    
    return(
        <div>
            <li className="collection-item avatar">
                    <span className="title"><h5>{props.title}</h5></span>
                    <a href={props.url}  target="_blank"><h6>Link to article </h6></a>
                    
                   
                    <a href="#!" onClick={()=>{props.delete(props.id)}} className="secondary-content"><i className="  small material-icons">delete</i></a>
                </li>
        
        </div>
    )
}

export default SavedArticle;