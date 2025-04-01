const commentModel = require("../model/commentModel")


const postComment = async(req, res) =>{
    const paramId = req.params.id
    const tokenId = req.user.id
    const {content} = req.body

    try{
        const newComment = new commentModel({content, author:tokenId, blogPost: paramId })
        const savedComment = await newComment.save()
    
        res.json({savedComment})
    }catch(error){
        console.log(error)
    }
}


const getABlogComments = async (req, res) => {
    const paramId = req.params.id
    try{
        const blogComments = await commentModel.find({blogPost: paramId })
        .populate('author', 'username')
        if(!blogComments){
            res.json({message: "No comment for this post yet"})
        }
        res.json({comments: blogComments})



    }catch(error){
        console.log(error)
    }
}

module.exports = {postComment, getABlogComments}