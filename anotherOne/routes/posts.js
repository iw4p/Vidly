const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

//Gets bacvk all the posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts)
    }catch (err) {
        res.json({message:err})
    }
});

//Submit a post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    try{
        const savedPost = await post.save()
        res.json(savedPost)
    } catch(err) {
        res.json({message: err})
    }
    
})

//Specific post
router.get('/:postID', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postID)
        res.json(post)
    } catch(err) {
        res.json({message: err})
    }
})

//Delete a post
router.delete('/:postId', async (req, res) => { 
    try {
        const removePost = await Post.remove(req.params.postId)
        res.json(removePost)
    } catch (err) {
        res.json({message: err})
    }
})

module.exports = router;