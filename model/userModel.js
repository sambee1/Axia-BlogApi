const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
    username: {
        type: String,
        required:true,
        unique: true
    },
    gmail: {
        type: String,
        required:true,
        unique: true
    },
    password: {
        type: String,
        required:true,
        unique: true
    }, 
    role:{
        type:String,
        required:true,
        enum:["admin", "user"]
    }
   
},
{
    timestamps: true
}
)

module.exports = mongoose.model('user', userModel)