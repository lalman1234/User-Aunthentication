import mongoose from "mongoose";
import bcrypt from  'bcrypt';
import  jwt  from "jsonwebtoken";


const userSchema =new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength:[6,'email must be at least 6 character long'],
        manLength:[40,'email must be at least 40character long'],  
    },
    password:{
        type: String,
        select: false,
    }
})

userSchema.statics.hashedPassword= async function(password){
    return await bcrypt.hash(password,10);
}

userSchema.methods.isValidpassword= async function( password){
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateJWT = function(){
    return jwt.sign({email: this.email}, process.env.JWT_SECRET);
}

const User = mongoose.model('user', userSchema);

export default User;