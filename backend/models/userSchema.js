import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
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
    password : {
        type : String,
        minLength : [8 , "Password Must Contain At least 8 Characters !"],
        required : true,
        select : false,
    },
    gender : {
        type : String,
        required : true,
        enum : ["Male","Female"],
    },
    dob : {
        type : Date,
        required : [true,"Dob is required !"],
    },
    
    role:{
        type : String,
        required : true,
        enum : ["Admin","Patient","Doctor"],
    },
    doctorDepartment:{
        type : String
    },
    docImage:{
        public_id : String,
        url : String,
    },
    
});

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password =await  bcrypt.hash(this.password,10);
});

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
};

userSchema.methods.generateJsonWebToken = function(){
    return jwt.sign({id : this._id},process.env.JWT_SECRET_KEY,{
        expiresIn:process.env.JWT_EXPIRES,
    });
};







export const User = mongoose.model("User",userSchema);