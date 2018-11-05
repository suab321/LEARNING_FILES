const passport=require('passport')
const google=require('passport-google-oauth20');
const {google_model}=require("./db");

passport.serializeUser((user,done)=>{
    done(null,user.id);
})
passport.deserializeUser((id,done)=>{
    google_model.findById({_id:id}).then(user=>done(null,user)).catch(err=>console.log(err));
})

passport.use(
    new google({
    callbackURL:"/google/google/redirect",
    clientID:"238305189451-elj9a10jh3cajo2o6cupmlham5qdlmkg.apps.googleusercontent.com",
    clientSecret:"ZoPbqUbBiyAyYfzc7YlOw4XH"
},
(accessToken,refreshToken,profile,done)=>{
    google_model.findOne({googleid:profile.id}).then(user=>{
        if(user){
            console.log("database"+user)
            done(null,user);
        }
        else{
            const data=new google_model;
            data.user=profile.displayName;
            data.googleid=profile.id;
            data.save()
            .then(user=>
                {console.log("new"+user) 
                done(null,user)}).catch(err=>console.log(err));
        }
    })
}))
