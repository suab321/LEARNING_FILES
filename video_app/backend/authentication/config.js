const passport=require('passport');
const google=require('passport-google-oauth20');

//developer made modules import//
const {Channel}=require('../database/db');
//ends//

passport.serializeUser((user,done)=>{
    done(null,user.id);
})
passport.deserializeUser(async(id,done)=>{
    const user=await Channel.findById({_id:id});
    done(null,user);
})


passport.use(
    new google({
        callbackURL:"/authentication/login",
        clientID:'376267176139-md9itk8d4t20gi5iqbb0of4k8fnae978.apps.googleusercontent.com',
        clientSecret:'aA0i2gsM8G3-tgNouC3ab6Pq',
    },async(accessToken,refreshToken,profile,done)=>{
        try{
            let data=await Channel.find({google_id:profile.id});
            if(!data.length){
            const db=new Channel;
            db.name=profile.displayName;
            db.google_id=profile.id;
            try{
            data=await db.save();
            done(null,data);
            }catch(err){
                console.log(err);
            }
            }
            else
                done(null,data[0]);
        }catch(err){
            console.log("some error happend during operations")
        }
    }
)
)