const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },  // Title of the resource (e.g., article or meditation)
    description: {
        type: String,
        required: true
    },  // A brief description of the resource
    type: {
        type: String,
        enum: ['Article', 'Meditation', 'BreathingExercise', 'CBT'],
        required: true
    },  // Type of resource (Article, Meditation, etc.)
    content: {
        type: String
    },  // For Articles or CBT text content
    fileUrl: {
        type: String
    },  // For audio files (e.g., meditation audio)
    tags: {
        type: [String]
    },  // Tags to categorize the resource (e.g., "Stress Relief", "Mindfulness")
}, { timestamps: true });

module.exports = mongoose.model('Resource', ResourceSchema);