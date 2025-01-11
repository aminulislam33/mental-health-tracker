const mongoose = require('mongoose');

const ForumPostSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    replies: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },  // User replying
            content: {
                type: String,
                required: true
            },  // Content of the reply
            createdAt: {
                type: Date,
                default: Date.now
            },  // Timestamp of the reply
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model('ForumPost', ForumPostSchema);