const mongoose = require('mongoose')

const commentModel = new mongoose.Schema({
    content:{type: String,
        required: true,
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    blogPost: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'blog',
        required:true,

    },
},
{timestamps:true}
)

module.exports = mongoose.model("comment", commentModel)