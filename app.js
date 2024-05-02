console.log("Server is running")
const express=require("express")
const app=express();

app.get('/',(request,response)=>{
response.send("successfully hosted my nodejs appplication on browser.")
});
app.get('/Home',(request,response)=>
{
response.render('home.ejs')
});
app.get('/About',(request,response)=>{
    response.render('about.ejs')
})

app.listen(3000,"127.0.0.1");
//Our project will listen to port 3000 i.e port no 3000 will be given to 
//our project
//Localhost(127.0.0.1) will be serving our application i.e localhost will give
//responses to our application.

//successfully hosted my nodejs appplication on browser.