const express = require('express');
const router = express.Router();
const postsControllers = require('../controllers/posts-controllers');


//@route GET postagens
//@desc Retornar todas as postagens
//@access Public
//@endpoint http://localhost:porta/postagens 
router.get('/postagens', postsControllers.getAllPosts);

//@route POST postagens
//@desc criar postagens
//@access Public
//@endpoint http://localhost:porta/postagens 
router.post('/postagens', postsControllers.createPost);

//@route PUT postagens
//@desc atualizar postagens
//@access Public
//@endpoint http://localhost:porta/postagens/:id 
router.put('/postagens/:id', postsControllers.updatePost);

//@route PATCH postagens
//@desc atualizar um único campo das postagens
//@access Public
//@endpoint http://localhost:porta/postagens/:id 
router.patch('/postagens/:id', postsControllers.updateFieldPost);

//@route DELETE postagens
//@desc deletar postagens
//@access Public
//@endpoint http://localhost:porta/postagens/:id
router.delete('/postagens/:id', postsControllers.deletePost);

module.exports = router;
