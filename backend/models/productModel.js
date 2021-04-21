import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    

user:{
    type: mongoose.Schema.Types.ObjectID,
    required: true,
    ref: 'User'
},   
name: {
    type: String,
    required : true
}, 

brand: {
    type: String,
    required: true,
    unique: true
}, 
category: {
    type: String,
    required : true
}, 
description: {
    type: String,
    required = true,
    
} ,
rating: {
    type: Number,
    required: true, 
    default: 0
}, 
}, {timestamps: true

})

const User = mongoose.model('User',UserSchema)

export default User