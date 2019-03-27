const mongoose=require('mongoose');

const {database_link}=require('../url');

// mongoose.connect(database_link,(success,err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log("database connected");

// })

//donor volunteer mentor
const user_schema=new mongoose.Schema({
    Name:String,
    Email:{type:String,unique:true},
    Phone:{type:String,unique:true},
    Password:String,
    Donation_History:[{type:mongoose.Schema.Types.ObjectId,ref:'Donation'}],
    Student_History:[{type:mongoose.Schema.Types.ObjectId,ref:'Student'}],
    Student_Impacted:[String],
    Profile_Pic:String,
    Role:String,
    Gender:String,
    Age:String,
    Info:String
})

//student
const student_schema=new mongoose.Schema({
    Name:String,
    Email:{type:String,unique:true},
    Phone:{type:String,unique:true},
    Password:String,
    Profile_Pic:String,
    Age:String,
    Info:String,
    Gender:String
})

//donation
const donation_schema=new mongoose.Schema({
    Payment_ID:String
})

//admin
const admin_schema=new mongoose.Schema({
    Name:String,
    Email:String,
    Password:String,
    Profile_Pic:String
})

//Applications
const application_schema=new mongoose.Schema({
    Name:String,
    Phone:{type:String,unique:true},
    Email:{type:String,unique:true},
    Role:String,
    Age:String,
    Gender:String
})

const user=mongoose.model('User',user_schema);
const student=mongoose.model('Student',student_schema);
const admin=mongoose.model('Admin',admin_schema);
const donation=mongoose.model('Donation',donation_schema);
const application=mongoose.model('Application',application_schema);

module.exports={
    user,
    student,
    admin,
    donation,
    application
}