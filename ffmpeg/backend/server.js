const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const {file_upload}=require('./file_handling');

const app=express();

app.use(cors());

app.use(express.static(__dirname+"/public/uploads"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/file',file_upload);

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/test.html');
})


app.listen(3002);