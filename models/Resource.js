const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        }, // e.g., "Article", "Meditation", "CBT Technique"
    },
    { timestamps: true }
);

module.exports = mongoose.model("Resource", resourceSchema);