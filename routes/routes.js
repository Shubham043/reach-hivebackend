import * as controller from '../controller/controller.js'
import express from 'express';


const router = express.Router();
router.route('/posts')
.get(controller.getPosts)  //get request
.post(controller.insertPosts)

router.delete('/posts/:id', controller.deletePostById);

export default router;