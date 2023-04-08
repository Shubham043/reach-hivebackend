import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/routes.js'
// import connectDB from './database/db.js';

const uri = "mongodb+srv://rawanshubham:5Y0tex1Xb8xfiIKh@cluster0.hbfn6ar.mongodb.net/?retryWrites=true&w=majority";
// const uri ="mongodb://127.0.0.1:27017/myapp";

const app = express();
const port = 8000;
mongoose.connect(uri , {
    // useNewUriParser: true,
    useUnifiedTopology: true
  }).then(()=>{
    console.log('connected to database');
  }).catch((e)=>{
    console.log(e)
  });

// use routes
app.use(express.json());
app.use('/api', routes);

// start the server

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
