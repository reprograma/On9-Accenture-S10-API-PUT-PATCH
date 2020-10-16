const express = require("express");
const router = express.Router()

const blogControllers = require("../controllers/blog-controllers");

router.get("/blog", blogControllers.getBlog);

router.put("/blog/:id", blogControllers.atualizarBlog);

router.patch("/blog/:id", blogControllers.atualizarTituloBlog);

router.patch("/blog/tags/:id", blogControllers.atualizarTagsBlog);


module.exports = router;
