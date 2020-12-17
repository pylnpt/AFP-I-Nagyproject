const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carSchema = new Schema({
    make: {type: String, required: true, trim: true, minlength: 3},
    model: {type: String, required: true, trim: true, minlength: 1},
    mpg: {type: Number, required: true, trim: true, minlength: 1},
    plate: {type: String, required: true, trim: true, unique: true},
    reserved: {type: String, required: true, trim: true}
}, {
    timestamps: true,
});

const Car = mongoose.model('cars', carSchema);

module.exports = Car;