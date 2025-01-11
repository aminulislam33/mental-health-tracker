const mongoose = require("mongoose");

const symptomLogSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        sleepQuality: {
            type: String,
            enum: ["excellent", "good", "average", "poor"],
            required: true,
        },
        eatingHabits: {
            type: String,
            enum: ["balanced", "unbalanced", "skipped", "overeating"],
            required: true,
        },
        physicalActivity: {
            type: String,
            enum: ["active", "moderate", "inactive"],
            required: true,
        },
        notes: {
            type: String,
            default: "",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("SymptomLog", symptomLogSchema);