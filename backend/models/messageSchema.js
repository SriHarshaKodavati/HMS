import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
        minLength : [3 , "First Name shoudl contain Atleast 3 Characters !"]
    },
    lastName : {
        type : String,
        required : true,
        minLength : [3 , "Last Name shoudl contain Atleast 3 Characters !"]
    },
    email : {
        type : String,
        required : true,
        validate : [validator.isEmail,"Please Entr a valid Email address !"]
    },
    phone : {
        type : String,
        required : true,
        minLength : [10 , "Number must contain exact 10 digits !"],
        maxLength : [10 , "Number must contain exact 10 digits !"],
    },
    message : {
        type : String,
        required : true,
        minLength : [11 , "Message must contain atleast 10 characters "],
    }
});

export const Message = mongoose.model("Message",messageSchema);