const google=require('passport-google-oauth20');
const passport=require('passport');
const {user_model}=require('../db/db');

passport.serializeUser((user,done)=>{
    done(null,user.id);
})
passport.deserializeUser((id,done)=>{
    user_model.findById({_id:id}).then(user=>{
        done(null,user);
    }).catch(err=>{
        console.log("authentication/config.js 11 "+err);
    })
})

passport.use(new google({
    callbackURL:"http://localhost:3002/authentication/google/redirect",
    clientID:"926645295175-18ss9q353iqlru8585kapic0o6sdssgs.apps.googleusercontent.com",
    clientSecret:"ITDj5WCvWCo3uTjX0rB8vVVH"
},(accessToken,refreshToken,profile,done)=>{
 user_model.findOne({google_id:profile.id}).then(user=>{
     if(user){
         done(null,user);
     }
     else{
         const db=new user_model
         db.google_id=profile.id
         db.name=profile.displayName;
         db.save().then(user=>{
             done(null,user);
         }).catch(err=>{console.log("authentication config.js 30 "+err)});
     }
 }).catch(err=>{console.log("authentication config.js 30 "+err)});   
}
))