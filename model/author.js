const mongoose = require('mongoose');
const Author = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Author', Author);