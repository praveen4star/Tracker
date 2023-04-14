require('dotenv').config(); 
const express = require('express'); 
const path = require("path")
const ejs = require("ejs");
const session = require('express-session'); 
const passport = require("passport"); 
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt'); 
const flash =  require('express-flash'); 
const app =express();

//Setting Up the template engine 
app.use(express.json())
app.set("view engine", "ejs")
const templatePath = path.join(__dirname, '../tempelates')
app.set("views", templatePath)
app.use(bodyParser.urlencoded({extended:true}));
////////////////////

// SettingUp static files
const css = path.join(__dirname, '../public/css')
const img = path.join(__dirname, '../public/img')
const js = path.join(__dirname, '../public/js')

app.use(express.static(css))
app.use(express.static(img))
app.use(express.static(js))
//////////////////////////

//Setting Up sessions
app.use(session({
    secret: "our little secret.", 
    resave: true, 
    saveUninitialized: true
})); 

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());  
////////////////

const collection = require("./mongodb")    //MongoDB File 

//routes connection 
app.get("/", (req,res)=>{
    res.render("home")
})

app.get("/login", (req,res)=>{
    res.render("login")
})

app.get("/signup", (req,res)=>{
    res.render("signup")
})
///////////////////

///signUp Post Request 
app.post("/signup", async(req, res)=>{
    const {name, email, password, confirm_password} = req.body
    const check = await collection.findOne({email: email})

    const lower = /[a-z]/;
    const upper  =/[A-Z]/;
    const number = /[0-9]/;
    const special = /['@', '#', '$', '&', '!', '%', '^']/;
    
    ////checking Email is not duplicate
    if(check){
        req.flash('error', 'Email Allready in Use....')
        req.flash('name', name)
        req.flash('email', email)
        res.redirect('/signup')
    }

    ////// Checking Password meets requirments 

    else if(password.length < 8){
        req.flash('error', 'Please make sure password is longer than 8 characters.')
        req.flash('name', name)
        req.flash('email', email)
        res.redirect('/signup')
    }
    else if(!lower.test(password)){
        req.flash('error', 'Please make sure password includes a lowercase letter.')
        req.flash('name', name)
        req.flash('email', email)
        res.redirect('/signup')
    }
    else if(!upper.test(password)) {
        req.flash('error', 'Please make sure password includes an uppercase letter.');
        req.flash('name', name)
        req.flash('email', email)
        res.redirect('/signup')
    }
    else if(!number.test(password)){
        req.flash('error', 'Please make sure Password Includes a Digit') 
        req.flash('name', name)
        req.flash('email', email)
        res.redirect('/signup')    
    }
    else if(!special.test(password)){
        req.flash('error', 'Please make sure password contains a special character');
        req.flash('name', name)
        req.flash('email', email)
        res.redirect('/signup')
    }

    //// Confirm Password checkin
    else if(password === confirm_password){
        const hashedPassword = await bcrypt.hash(password, 10)
    
        const data= new collection({
            name:name, 
            email:email,
            password:hashedPassword,
        });
        
        data.save(function(err){
            if(err){
                console.log(err); 
            }
            else{
                req.flash('success', 'you have been resistered successfully now you can login.');
                res.redirect('/'); 
            }
        });
    }

    else{
        req.flash('error', 'Both the passwords should be same')
        req.flash('name', name)
        req.flash('email', email)
        res.redirect('/signup')
    }
});
/////////////////////////

///// Login Post Request
app.post("/login", async(req, res)=>{

    const {email, password} = req.body 
    const check= await collection.findOne({email:email})
    
    try{
        const match = await bcrypt.compare(password, check.password)

        if(match){
            req.flash('success', 'Successfully loged in....')
            res.redirect('/'); 
        }
        else{
            req.flash('error', 'wrong details')
            req.flash('email', email)
            res.redirect('/login'); 
        }
    }

    catch{
        req.flash('error', 'Acount with this email does not exists.')
        req.flash('email', email)
        res.redirect('/login')
    }
});
//////////////////////////////

/////Server Connection 
const port =process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`port is running at ${port}`)
}); 
////////////////////