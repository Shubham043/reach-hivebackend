import mongoose from 'mongoose';
const {Schema} = mongoose;

const users = new Schema({
    username:{
       type: String,
       required:true
    },
    email:{
       type:String,
       required:true
    },
    password:{
       type:String,
       required: true
    }
})

export default users;
