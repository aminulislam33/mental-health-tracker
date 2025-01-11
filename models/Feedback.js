const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tips: {
        type: String,
        required: true
    },
    moodTrend: {
        type: String
    },
}, { timestamps: true });

module.exports = mongoose.model('Feedback', FeedbackSchema);