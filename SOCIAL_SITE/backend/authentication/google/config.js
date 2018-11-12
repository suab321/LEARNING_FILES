const passport=require('passport')
const google=require('passport-google-oauth20');
const {google_model}=require("./db");
const {users_reg_in_model}=require("./db");

passport.serializeUser((user,done)=>{
    done(null,user.id);
})
passport.deserializeUser((id,done)=>{
    google_model.findById({_id:id}).then(user=>done(null,user)).catch(err=>console.log(err));
})

passport.use(
    new google({
    callbackURL:"/google/google/redirect",
    clientID:"326230015614-p9ld6j9mg7dhg6ef66g64e9b8gp661h7.apps.googleusercontent.com",
    clientSecret:"YUWfotbJZRi_OrgfDk_P0JuK"
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
              {
                console.log("new"+user)
                const db=new users_reg_in_model
                db.proid=user._id;
                db.save().catch(err=>console.log(err));
                done(null,user)}).catch(err=>console.log(err));
        }
    })
}))
