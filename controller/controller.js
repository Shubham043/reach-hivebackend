import mongoose from 'mongoose';
import PostModel from '../models/posts.js';

const Post = mongoose.model('Post', PostModel);

//  GET requests for all posts
export const getPosts = async (req, res) => {
  try {
    // Get all posts from the database
    const posts = await Post.find();

    //  success response 
    res.status(200).json(posts);
  } catch (error) {
    // If there was an error, send a 500 error response with the error message
    res.status(500).json({ message: error.message });
  }
}

//  requests to create a new post
export const insertPosts = async (req, res) => {
  try {
    // Create a new post with the data from the request body
    const post = new Post({
      companyName: req.body.companyName,
      postImage: req.body.postImage,
      profileImage: req.body.profilImage,
      title: req.body.title,
      url :req.boyd.url,
      description: req.body.description
    });

    // Save the post to the database
    await post.save();

    // Send a success response with the created post object
    res.status(201).json(post);
  } catch (error) {
    // If there was an error, send a 500 error response with the error message
    res.status(500).json({ message: error.message });
  }
}

//delete request
export const deletePostById = async (req, res) => {
    try {
      // find the post by ID and delete it from the database
      const deletedPost = await Post.findByIdAndDelete(req.params.id);
  
      // If the post was not found, send a 404 error response
      if (!deletedPost) {
        return res.status(404).json({ message: 'Post not found' });
      }
  
      // Send a success response with the deleted post object
      res.status(200).json(deletedPost);
    } catch (error) {
      // If there was an error, send a 500 error response with the error message
      res.status(500).json({ message: error.message });
    }
  }