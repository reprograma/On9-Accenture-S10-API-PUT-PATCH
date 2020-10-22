const express = require('express');
const router = express.Router();

const postsControllers = require('../controllers/posts-controllers')


//@route PUT posts
//@desc Atualizar alguma postagem do blog Reprograma
//@acess Public
// endpoint http://localhost:porta/posts/:id

router.put('/posts/:id', postsControllers.updatePost);

//@route PATCH posts
//@desc Atualizar o campo título da postagem
//@acess Public
// endpoint http://localhost:porta/posts/:id

router.patch('/posts/:id', postsControllers.partialUpdate);

module.exports =  router;
