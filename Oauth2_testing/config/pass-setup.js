const passsport=require('passport')
const google=require('passport-google-oauth20');
const keys=require('./keys')
const model=require('./db')

passsport.serializeUser((user,done)=>{
    done(null,user.id)
})
passsport.deserializeUser((id,done)=>{
    model.findOne({id}).then(user=>{
        console.log(user)
        done(null,user)}).catch(err=>console.log(err))
})
passsport.use(
    new google({
    callbackURL:'http://localhost:3000/auth/google/redirect',
    clientID:keys.google.id,
    clientSecret:keys.google.secret
},(accessToken,refreshToken,profile,done)=>{

    model.findOne({id:profile.id}).then(user=>{
        if(user)
            done(null,user)
        else{
            const db=new model
    db.user=profile.displayName
    db.id=profile.id
    db.save().then(user=>{done(null,user)}).catch(err=>{console.log(err)})

        }
    })
})
)