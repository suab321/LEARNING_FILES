const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');
app.use(express.static("public"));

app.get('/',(req,res)=>{
    res.render("abhi",{a:1});
})
mongoose.connect('mongodb://127.0.0.1/testing_queries',{useNewUrlParser:true});

const test_Schema1=new mongoose.Schema({
    name:String,
    task1:[{number:Number,desc:String}],
})
const test_Schema2=new mongoose.Schema({
    name:String,
    task2:[],
})
const test_Schema3=new mongoose.Schema({
    name:String,
    task3:[{number:Number,desc:String,subtask:[{number:Number,desc:String}]}]
})

const s1=mongoose.model('table1',test_Schema1);
const s2=mongoose.model('table2',test_Schema2);
const s3=mongoose.model('table3',test_Schema3);

// app.post('/task1',async(req,res)=>{
//     const db=new s1;
//     s1.name="suab";
//     await db.save();
//     res.send("yes");
// })

//method to update task1 fields
app.post("/task1/:id",async(req,res)=>{
    console.log(req.body)
    await s1.findByIdAndUpdate({_id:req.params.id},{$addToSet:{'task1':{number:1,desc:req.body.desc}}});
    res.send("yes");
})
app.get("/remove_task1/:id/:subid",async(req,res)=>{
    await s1.findByIdAndUpdate({_id:req.params.id},{$pull:{'task1':{_id:req.params.subid}}});
    res.send("yes");
})
app.get("/update_task1/:id/:subid",async(req,res)=>{
    try{
    const x=await s1.update({_id:req.params.id,"task1._id":req.params.subid},{$set:{'task1.$.desc':'suab'}});
    res.send(x);
    }catch(err){
        res.send(err);
    }
})
app.get("/update_task1_n/:id/:subid",async(req,res)=>{
    try{
    const x=await s1.update({_id:req.params.id,"task1._id":req.params.subid},{$inc:{'task1.$.number':1}});
    res.send(x);
    }catch(err){
        res.send(err);
    }
})
//ends//
//method of operation in task3//
app.post('/task2/:id',async(req,res)=>{
    await s3.findByIdAndUpdate({_id:req.params.id},{$addToSet:{'task3':{desc:req.body.desc,number:1}}});
    res.send("yes");
})
app.post("/task3_add_subtask/:id/:subid",async(req,res)=>{
    await s3.update({_id:req.params.id,"task3._id":req.params.subid},{$addToSet:{'task3.$.subtask':{number:1,desc:req.body.desc}}});
    res.send("yes");
})
app.get("/update_task3_subtask/:id/:taskid/:subtaskid",async(req,res)=>{
    const x=await s3.update({_id:req.params.id,"task3._id":req.params.taskid,"subtask.$._id":req.params.subtaskid},{$set:{'subtask.$.desc':"xxxxx"}});
    res.send(x);
})
app.get("/find_task3_subtask/:id/:taskid/:subtaskid",async(req,res)=>{
    const data=await s3.find({_id:req.params.id},{"task3":{$elemMatch:{"_id":req.params.taskid}}});
    res.send(data);
})
//to remove you need to first remove the that embedded object than re insert into the spot//
//end//


app.listen(3002);