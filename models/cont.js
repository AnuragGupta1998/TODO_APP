const mongoose=require("mongoose");

//Creating schema of contactlist.................................
const contactSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    
},{timestamps:true}//for date and time when document is created
);

//access collection by Contact
const Contact=mongoose.model("Contact_Collection",contactSchema);

module.exports=Contact;