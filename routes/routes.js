import * as controller from '../controller/controller.js'
import express from 'express';
import { authMiddleware } from '../middleware/auth.js';
import * as blog from "../controller/blogcontroller.js";

const router = express.Router();

//routes for homepage
//  router.route('/posts')
//   .get(blog.getPosts)
// Routes for posts
router.route('/posts')
  .get(authMiddleware, blog.getPosts)
  .post(authMiddleware, blog.insertPosts);

router.route('/posts/:id')
  .delete(authMiddleware, blog.deletePostById)
  .patch(authMiddleware, blog.updatePostById);

// Routes for users
router.route('/users')
  .get(authMiddleware, controller.getUsers)
  .post(controller.createUser);

router.route("/users/logIn")
  .post(authMiddleware, controller.logIn);

router.route('/users/:id')
  .get(authMiddleware, controller.getUserById)
  .patch(authMiddleware, controller.updateUserById)
  .delete(authMiddleware, controller.deleteUserById);

export default router;
