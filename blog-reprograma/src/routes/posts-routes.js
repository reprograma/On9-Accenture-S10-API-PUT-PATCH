const express = require('express');
const postsControllers = require('../controllers/posts-controllers');
const router = express.Router();

const postController = require('../controllers/posts-controllers');

//@route GET Posts
//@desc Return all posts
//@acces Public
//@endpoint http://localhost:port/posts
router.get('/posts', postsControllers.getAll);

//@route GET Posts
//@params :id
//@desc Return a post by id
//@acces Public
//@endpoint http://localhost:port/posts/:id
router.get('/posts/:id', postController.getById);

//@route POST Posts
//@desc Create a post
//@acces Public
//@endpoint http://localhost:port/posts
router.post('/posts', postController.createPost);

//@route PUT Posts
//@desc Update a post
//@acces Public
//@endpoint http://localhost:port/:id
router.put('/posts/:id', postController.updatePost);

//@route PATCH Posts
//@desc Update post's title
//@acces Public
//@endpoint http://localhost:port/:id
router.patch('/posts/:id', postController.updateTitle);

//@route PATCH Posts
//@desc Update post's tag
//@acces Public
//@endpoint http://localhost:port/:id
router.patch('/posts/:id', postController.updateTag);

//@route DELETE Posts
//@desc Delete a post
//@acces Public
//@endpoint http://localhost:port/:id
router.delete('/posts/:id', postController.deletePost);

module.exports = router;