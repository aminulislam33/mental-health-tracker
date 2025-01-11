const mongoose = require('mongoose');

const PeerSupportGroupSchema = new mongoose.Schema({
    groupName: {
        type: String,
        required: true
    },  // Name of the group
    description: {
        type: String,
        required: true
    },  // Group's description
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },  // User who created the group
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],  // List of users in the group
    posts: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },  // User who posted in the group
            content: {
                type: String, required: true
            },  // Content of the post
            createdAt: {
                type: Date, default: Date.now
            },  // Timestamp of the post
        }
    ],
}, { timestamps: true });

module.exports = mongoose.model('PeerSupportGroup', PeerSupportGroupSchema);