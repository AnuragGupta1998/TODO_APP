const express = require("express");
const path = require("path");
const port=8003;

const db=require('./config/mongoose'); //requiring mongoose connected to mongoDB

//Populating the DB
const Contact=require('./models/cont'); //access to database  contact Schema


const app=express();

//middleware to read the form data from home.ejs...................
app.use(express.urlencoded());

app.use(express.static('assets'));

//setting views engine..............................................
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));//setting path of view

//array of contactList
// var contactList=[
   
// ];

//delete contact from DB(database).............................................................................


//post request from form and putting data to database.......................................................
app.post('/create-contact',async function(req,res){

      await Contact.create(req.body);
                  // {
                  //   name:req.body.name,
                  //   phone:req.body.phone,
                 
                  // });
                  // console.log(req.body);
                 
                  // .then(val=>console.log('*******',val));
      return res.redirect('back');
});

//home route
app.get('/home',(req,res)=>{

 //fetching data from MongoDB
 Contact.find({}).then(val=>{
          return res.render('home',{title:'Contact List of Employee',heading:"Anurag Contact-List", contList : val})//passing title parameter
      } )

});




app.get('/delete-contact',async function(req,res){
       
      //find contact id to delete
      let id=req.query.id;
      console.log("id is",id);

   // finding into database the contact by id Model.findByIdAndDelete()..........
    await Contact.findByIdAndDelete(id);
      
      
      return res.redirect('back');
 
 });

 //listening server on port 8003
app.listen(port,()=>console.log("Server is up and running on port:-",port));