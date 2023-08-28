const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/Anurag_Contact_DB');

const db=mongoose.connection;

db.on('error',console.error.bind(console,'error in connecting with database'));

db.once('open',()=>console.log("Connection successfully mongoose with database"));