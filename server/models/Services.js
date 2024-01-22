const {Schema, Types, model} = require('mongoose');

const Services = new Schema({
    title: {type: String, required: true},
    home: {type: Types.ObjectId, ref: 'Home'},
    objects: {type: Types.ObjectId, ref: 'Objects'},
})

module.exports = model('Services', Services)