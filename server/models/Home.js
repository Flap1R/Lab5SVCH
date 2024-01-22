const {Schema, model} = require('mongoose');

const Home = new Schema({
    title: {type: String, required: true},
})

module.exports = model('Home', Home)