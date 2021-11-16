const express = require("express");
const axios = require("axios");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
//instate express
const app = express();


dotenv.config();



//built in level midleware
app.use(express.json());
app.use(cors0());
app.use(morgan("dev"));
const todos = [
        {id:1,task:"sleep"},
        {id:2, task: "eat"},
        {id:3, task: "code"}
        ]
//middlewares
app.get("/todos",async(req,res)=>{ ///////read
 res.status(200)
 res.json(todos)
    });
////create    
 app.post("/create",(req,res)=>{
    const{id,task}= req.body
     //const newTask ={id: req.body.id, task:req.body.task} >> jsx
     todos.push({id,task});
            res.status(201);
            res.json({id,task})
        })

})

//routers

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> {
console.log(`server on ${PORT}`);
})