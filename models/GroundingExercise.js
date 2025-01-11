const mongoose = require('mongoose');

// Grounding Exercise Schema
const GroundingExerciseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },  // Title of the exercise (e.g., "5-4-3-2-1 Grounding")
    description: {
        type: String,
        required: true
    },  // Description of how to perform the exercise
    type: {
        type: String,
        enum: ['Breathing', 'Mindfulness', 'Grounding'],
        required: true
    },  // Type of exercise
    instructions: {
        type: String,
        required: true
    },  // Detailed instructions for the exercise
}, { timestamps: true });

// Export the model
module.exports = mongoose.model('GroundingExercise', GroundingExerciseSchema);