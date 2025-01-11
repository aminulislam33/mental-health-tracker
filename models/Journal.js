const mongoose = require('mongoose');

const JournalSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', required: true
    },
    journalText: {
        type: String,
        required: true
    },
    tags: {
        type: [String]
    },
    moodLogId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MoodLog'
    }
}, { timestamps: true });

module.exports = mongoose.model('Journal', JournalSchema);