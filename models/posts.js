import  mongoose from 'mongoose';
const {Schema} = mongoose;

const posts = new Schema({
 profileImage:{
    type: String,
    // required:true
 },
 postImage:{
    type:String,
    required:true
 },
 title:{
    type:String,
    required:true
 },
 description:{
    type:String,
    required: true
 },
 companyName:{
   type:String,
   required: true
 },
 url:{
   type:String,
   required: true 
 }
}
)
export default posts;