const mongoose = require("mongoose");

const moodLogSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        mood: {
            type: String,
            required: true
        }, // e.g., Happy, Sad, Neutral
        energyLevel: {
            type: String,
            required: true
        },
        notes: {
            type: String
        },
        date: {
            type: Date,
            default: Date.now
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("MoodLog", moodLogSchema);