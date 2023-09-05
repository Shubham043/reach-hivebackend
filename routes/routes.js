import * as controller from '../controller/controller.js'
import express from 'express';
import { authMiddleware } from '../middleware/auth.js';
import * as blog from "../controller/blogcontroller.js";

const router = express.Router();


// Routes for posts
router.route('/posts')
  .get(authMiddleware, blog.getPosts)
  .post(authMiddleware, blog.insertPosts);

router.route('/posts/:id')
  .delete(authMiddleware, blog.deletePostById)
  .put(authMiddleware, blog.updatePostById)
  .patch(authMiddleware,blog.update)

// Routes for users
router.route('/users')
  .get( controller.getUsers)
  .post(controller.createUser);

router.route("/users/logIn")
  .post( controller.logIn);

router.route('/users/:id')
  .get(authMiddleware, controller.getUserById)
  .patch(authMiddleware, controller.updateUserById)
  .delete(controller.deleteUserById);

export default router;
