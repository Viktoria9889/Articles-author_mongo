const mongoose = require('mongoose');
const { Schema } = mongoose;


const schema = new Schema ({
    name: { type: String },
});

const model = mongoose.model('author', schema);


module.exports = model;