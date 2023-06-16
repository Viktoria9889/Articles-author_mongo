const mongoose = require('mongoose');
const { find } = require('./authors');
const { Schema } = mongoose;


const schema = new Schema ({
        author: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'author'
        },
        title: { type: String },
        text: { type: String },
});

const model = mongoose.model('title', schema);





module.exports = model;

