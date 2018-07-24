const router = require("express").Router();
const Article = require("../models/article.js");

//retrieve all the saved articles
router.get("/api/articles", (req, res)=>{
    Article.find().then((result)=>{
        console.log(result);
        res.send(result);
    });
   
   
});

//adds an article to the collection
router.post("/api/articles", (req,res)=>{
    Article.create(req.body).then((result)=>{
        console.log(result);
        res.send(result);
    });

});

//delete an article from the saved list
router.delete("/api/articles", (req,res)=>{
    console.log(req.body.id);
    Article.findByIdAndRemove(req.body.id,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{ 
        console.log("deleted:"); 
        res.send(result._id);

        }
       
    })
})

module.exports = router;