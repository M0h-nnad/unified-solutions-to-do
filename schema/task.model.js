const mongoose = require('mongoose');

const taskShema = mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, required: true }
}, { timestamps: true })

const task = mongoose.model('task', taskShema);


module.exports = task;