const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
    username: {type: String, trim: true, unique: true},
    email: {type: String, trim: true},
    password: {type: String, minlength: 1},
}, {
    timestamps: true,
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;