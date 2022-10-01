const mongoose =require('mongoose');

// creating a database 

mongoose.connect("mongodb+srv://shadab12:Shadab123@cluster0.xactoot.mongodb.net/nodedata?retryWrites=true&w=majority").then(()=>{
    console.log('connection is successfully');
}).catch((error)=>{
    console.log(error);
})



// mongodb://localhost:27017/Dynamicmutha


