const express=require('express');
const app=express();
const bodyparser=require('body-parser');
const cors=require('cors');

const database={
	users:[
		{
			id:"1",
			name:"abhinav",
			email:"adityasaha890@gmail.com",
			password:"9051571833",
			entries:0,
			joined_data:new Date()
		},

		{
			id:"2",
			name:"ravi",
			email:"ravisaha890@gmail.com",
			password:"8961351902",
			entries:0,
			joined_data:new Date()
		}
	]
}


app.use(cors());
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());


app.get('/',(req,res)=>res.json(database.users))


app.post('/signin',(req,res)=>{
	const{email,password}=req.body;
	if(email===database.users[0].email && password===database.users[0].password)
			res.status(200).json(database.users[0]);

	else
		res.status(400).json("error logging in");
		})


app.post('/register',(req,res)=>{
	const {name,email,password}=req.body;
	database.users.push({
			id:"3",
			name:name,
			email:email,
			password:password,
			entries:0,
			joined_date:new Date()
	})
	res.json(database.users[database.users.length-1]);
})

app.put('/image',(req,res)=>{
	let {entries}=req.body;
	entries++;
	res.json(entries);
})

app.get('/profile/:id',(req,res)=>{
	const{id}=req.params;
	let dec=false;
	database.users.forEach(object=>{
		if(object.id==id){
			dec=true;
			 res.json(object);
		}
	})
	if(!dec)
		res.json("Not found");
})

app.listen(3000);