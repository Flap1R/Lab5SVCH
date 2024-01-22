const {Schema, model} = require('mongoose');

const Objects = new Schema({
    title: {type: String, required: true},
})

module.exports = model('Objects', Objects)