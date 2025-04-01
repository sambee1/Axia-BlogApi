const mongoose = require('mongoose')

const blogModel = new mongoose.Schema({
    title:{type: String,
        required: true     
    },
    
    content:{
        type:String,
        required: true
    },
   author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
},
{timestamps:true}
)

module.exports = mongoose.model("blog", blogModel)