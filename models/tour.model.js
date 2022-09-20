const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        minLength: [3, 'Tour Name should be longer than 3 char'],
        unique: true,
        required: true
    },
    price: {
        type: Number,
        min: [0, 'Price cannot be Minus value'],
        required: true
    },
    image: {
        type: String,
        required: true,
        minLength: [3, 'Image Link should be longer than 3 char']
    },
    viewCount: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});
module.exports = mongoose.model('Tour', tourSchema);