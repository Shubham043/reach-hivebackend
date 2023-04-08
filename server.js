import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/routes.js'
import cors from 'cors';

const uri = "mongodb+srv://rawanshubham:5Y0tex1Xb8xfiIKh@cluster0.hbfn6ar.mongodb.net/?retryWrites=true&w=majority";
const app = express();
const port = 8000;

mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => {
  console.log('Connected to database');
}).catch((e) => {
  console.log(e)
});

// Use CORS middleware
app.use(cors());

// Use routes
app.use(express.json());
app.use('/api', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
