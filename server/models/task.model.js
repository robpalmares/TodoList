const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = Schema({
    task: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('task', taskSchema);