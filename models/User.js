const mongoose = require('mongoose');

// Schema definition
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' }
}, { timestamps: true })

// Model export
module.exports = mongoose.model('User', userSchema);