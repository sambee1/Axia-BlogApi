const blogModel = require("../model/blogModel")

const createABlog = async (req, res, next) => {
    try {
        const tokenId = req.user.id
    const newBlog = new blogModel({author:tokenId, ...req.body})
    const  createdBlog = await newBlog.save();
   
    res.json({createdBlog})
    } catch (error) {
        console.log(error)
    }
}

const getAllBlogs =async (req, res, next) => {
    try {
        const blogs = await blogModel.find()
        res.status(200).json(blogs)
    } catch (error) {
       next({status:500, message:"something wrong somewhere"})
    }
}

const getOneBlog = async (req, res, next) => {
    try {
        const {id} = req.params
        const blog = await blogModel.findById(id)
        if(!blog){
            return res.json({Message: "blog not found"}).status(404)
        }
        res.json(blog).status(200)
    } catch (error) {
     next({status:404, message:"No blog with such ID"})  
    }
}

const updateBlog = async (req, res, next) => {
    try {
        const updates = req.body
        const {id} = req.params
        const updateBlog = await blogModel.findByIdAndUpdate(id, updates, {new:true, runValidators:true})
        if(!updateBlog) return next ({status:404, message:"No blog with such ID"})
            res.status(200).json(updateBlog)
    } catch (error) {
       next({status:404, message:"No Blog with such ID"})
    }   
}

const deleteBlog = async (req, res, next) => {
    const {id} = req.params
    try{
        await blogModel.findByIdAndDelete(id)
        res.status(200).json({mess:"Blog deleted"})
    } catch (err){
        next({status:404, message:"No blog to be deleted with such ID"})
    }
}
module.exports = {createABlog, getAllBlogs, getOneBlog, updateBlog, deleteBlog}