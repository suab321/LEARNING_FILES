const express=require("express")
const fetch=require('node-fetch');
const mongoose=require('mongoose');
const app=express();
const bodyParser=require('body-parser')

const url="mongodb://127.0.0.1/async_test";
mongoose.connect(url,{useNewUrlParser:true},(err,connect)=>{
    if(err)
        console.log(err);
    else
        console.log("connected");
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const model=new mongoose.Schema({
    name:String,
    age:Number,
    surnmae:String
})
const model1=mongoose.model("test",model);


function a1(){
    return new Promise((resolve,reject)=>{
        model1.find().then(user=>{
            resolve(user);
        }).catch(err=>{resolve(err)});
    })
   
}

function a2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const err=false;
            if(!err){
                console.log("a2");
                resolve();
            }
            else
                reject("Some unkown error");
        },2000);
    })
}

// a2().then(a1).catch(err=>console.log(err));

function a3(){
    setTimeout(()=>{
        console.log("abhi");
    },2000);
}
 


app.get('/',async (req,res)=>{
    try{
        var data=await model1.findById({name:"abhi"});
    }
    catch{
        res.status(400).json("no data");
    }
    res.status(200).json(data);

    var c=await a1();
    console.log(c);
})

app.get('/post',(req,res)=>{
    for(var i=0;i<5;i++){
        const db=new model1;
        db.name="abhi"+i;
        db.age=i;
        db.surnmae="singh"+i;
        db.save().catch(err=>{
             res.json(err);
        })
    }
})





app.listen(4000);