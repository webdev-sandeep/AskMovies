const Post = require('../models/posts')
const fs = require('fs')

module.exports = class API {
    //fetch all the post
    static async fetchAllPosts(req,res){
        try {
            const posts = await Post.find()
            res.status(200).json(posts)
        } catch (error) {
            res.status(404).json({message:error.message})
        }
    }

    //fetch post by Id
    static async fetchPostById(req,res){
        const id = req.params.id
        try {
            const post = await Post.findById(id)
            res.status(200).json(post)
        } catch (error) {
            res.status(404).json({message:error.message})
        }
    }

    //create a post
    static async createPost(req,res){
        const post = req.body;
        const imagename = req.file.filename;
        post.image = imagename
        try {
            await Post.create(post)
            res.status(201).json({message:'Post Created Successfully!'})
        } catch (error) {
            res.status(400).json({message:error.message})
        }
    }

    //update the post
    static async updatePost(req,res){
        const id = req.params.id
        let new_image = ""
        if(req.file){
            new_image = req.file.filename
            try {
                fs.unlinkSync('./uploads/'+req.body.old_image)
            } catch (error) {
                console.log(error)
            }
        } else{
            new_image = req.body.old_image
        }
        const newPost = req.body
        newPost.image = new_image

        try {
            await Post.findByIdAndUpdate(id,newPost)
            res.status(200).json({message:'Post updated successfully!'})
        } catch (error) {
            res.status(404).json({message:error.message})
        }
    }

    //Delete the post
    static async deletePost(req,res){
        const id = req.params.id
        try {
            const result = await Post.findByIdAndRemove(id)
            if(result.image!=''){
                try {
                    fs.unlinkSync('./uploads/'+result.image)
                } catch (error) {
                    console.log(error)
                }
            }
            res.status(200).json({message:'Post deleted successfully!'})
        } catch (error) {
            res.status(404).json({message:error.message})            
        }
    }
}