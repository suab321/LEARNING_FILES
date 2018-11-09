const passport=require('passport')
const google=require('passport-google-oauth20');
const {google_model}=require("./db");
const {user_reg_in_model}=require("./db");

passport.serializeUser((user,done)=>{
    done(null,user.id);
})
passport.deserializeUser((id,done)=>{
    google_model.findById({_id:id}).then(user=>done(null,user)).catch(err=>console.log(err));
})

passport.use(
    new google({
    callbackURL:"/google/google/redirect",
    clientID:"103917130268-hudhqldas69ujmcq5hi7ucr44816ahsv.apps.googleusercontent.com",
    clientSecret:"uZTrwWIf0oXAg2JslYs8DHUy"
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
                const db=new user_reg_in_model
                db.name=user.user;
                db.save().catch(err=>console.log(err));
                done(null,user)}).catch(err=>console.log(err));
        }
    })
}))
