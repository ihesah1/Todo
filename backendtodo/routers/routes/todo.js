const express = require("express");


const todoRoute = express.Router()
todoRoute.get("/todos",async(req,res)=>{ ///////read
    res.status(200)
    res.json(todos)
       });
   ////create    
   todoRoute.post("/create",(req,res)=>{
       const{id,task}= req.body
        //const newTask ={id: req.body.id, task:req.body.task} >> jsx
        todos.push({id,task});
               res.status(201);
               res.json({id,task})
           })
   
   
    todoRoute.get("/todos/:id",async(req,res)=>{ ///////read
       const {id}=req.params;
       res.status(200)
       res.json(todos)
          });
      
      
    todoRoute.delete("/deleteTodo", (req, res) => {
     let result = req.body
      DeleteData.deleteTodo(result, (todos) => {
      res.json(todos)
               })
           
           })
module.exports=todoRoute;      