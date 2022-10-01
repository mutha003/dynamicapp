const express =require ('express');
require('./db/connection')
const Userdatas =require("./models/usermsg")
const app=express();
const PORT=process.env.PORT || 8000;
const path =require("path")

const stacticpath=path.join(__dirname,'../public')
const component=path.join(__dirname,"./component")

app.use(express.static(stacticpath))

app.use(express.urlencoded({extended:false}))

app.set("view engine","hbs")
app.set("views",component)
app.get('/',(req,res)=>{
    res.render("index")
 
})




app.post('/contact',async(req,res)=>{
    try {
        // res.send(req.body)
        const userData =new Userdatas(req.body);
        await userData.save();
        res.status(201).render("index");
        
    }catch (error) {
        res.status(500).send(error);
    }
})

app.listen(PORT,()=>{
    console.log(`server running successfully port at ${PORT}`);
})