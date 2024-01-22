const {Schema, Types, model} = require('mongoose');

 const User = new Schema({
     userName: {type: String, unique: true, required: true},
     password: {type: String, required: true},
     roles: [{type: String, ref: 'Role'}],
 })

 module.exports = model('User', User)