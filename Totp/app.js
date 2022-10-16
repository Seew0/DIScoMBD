const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const consolidate = require('consolidate');
const nunjucks = require('nunjucks');
const https = require('https');
const app = express();

 const CryptoJS = require("crypto-js");
var SHA256 = require("crypto-js/sha256");

const dotenv = require("dotenv");

dotenv.config();

// db
const db = require("./db");
const User = require("./models/User");
app.engine('html', consolidate.nunjucks);

app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, "public")));

function signKey(clientKey, msg) {
    let retval = clientKey ^ msg;
    return SHA256(retval+"").toString(CryptoJS.enc.Hex)
  
}

function betweenRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


app.use(bodyparser.urlencoded({extended : true}));

app.get("/",function(req,res){
    res.render(__dirname + "/index.html");

})
//9ea02892500b12abadcc89576925e660
app.get("/register",function(req,res){
    res.render(__dirname + "/register.html");
});

app.post("/register-it",function(req,res){

    const uid = req.body.uid;
    const sharekey = req.body.key;
    const newUser = new User({
        uid : uid,
        sharedkey : sharekey
    });
    newUser.save(function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("saved");
        }
    });
    res.redirect("/");
});

app.get("/login",function(req,res){
    res.render(__dirname + "/login.html");
})

let sharedkeyh;

app.post("/login-it",function(req,res){
    const uid = req.body.uid;
    User.findOne({uid : uid},function(err,foundUser){
        if(err){
            console.log(err);
        }
        else{
            if(foundUser){
                
                sharedkeyh = foundUser.sharedkey;
                    res.redirect("/otppage");
            }
            else{
                res.redirect("/login");
            }
        }
    }
    )
});

let random1 ;

app.get("/otppage",function(req,res){

    random1 = betweenRandomNumber(10000000, 99999999);
    res.render(__dirname + "/otppage.html",{random:random1});
}
);

app.post("/otppage-it",function(req,res){
    const otp = req.body.otp;
    let newkey = sharedkeyh+random1;
    newkey =  SHA256(newkey + "").toString(CryptoJS.enc.Hex);

    let subnew = newkey.substring(60);
    
    
    console.log(subnew,newkey);

    let no = Number("0x"+subnew);
    console.log(no);

    if(no == otp){
        res.send("jeetgye");
    }
    else{
        res.send("maachudao");
    }
});



db.connect().then(() => {
  console.log("Connected to DB");
  app.listen(process.env.PORT || 3000, function () {
    console.log("server started at port 3000");
  });
});


