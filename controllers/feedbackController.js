const Feedback = require("../models/Feedback");
const Journal = require("../models/Journal");
const MoodLog = require("../models/MoodLog");

const GenerateFeedback = async (req, res) => {
    const userId = req.user.id;

    try {
        const moodLogs = await MoodLog.find({ userId }).sort({ timestamp: -1 }).limit(7);  // Last 7 mood logs (one week)
        const journals = await Journal.find({ userId }).sort({ timestamp: -1 }).limit(7);  // Last 7 journal entries (one week)

        let tips = "Take some time to reflect on your mental well-being. Try to engage in calming activities.";
        let moodTrend = "";

        if (moodLogs.length > 0) {
            const moodCounts = moodLogs.reduce((acc, log) => {
                acc[log.mood] = (acc[log.mood] || 0) + 1;
                return acc;
            }, {});

            const mostFrequentMood = Object.keys(moodCounts).reduce((a, b) => moodCounts[a] > moodCounts[b] ? a : b);

            if (mostFrequentMood === "Sad" || mostFrequentMood === "Anxious") {
                tips = "It seems like you're feeling anxious or down. Try deep breathing exercises or talk to a friend.";
                moodTrend = `Your mood has been predominantly ${mostFrequentMood} recently.`;
            } else if (mostFrequentMood === "Happy") {
                tips = "You're feeling happy! Keep up the positive mindset and continue engaging in activities that bring you joy.";
                moodTrend = `Your mood has been predominantly ${mostFrequentMood} recently.`;
            }
        }

        const newFeedback = new Feedback({
            userId,
            tips,
            moodTrend
        });

        const savedFeedback = await newFeedback.save();
        res.status(201).json(savedFeedback);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const GetFeedback = async (req, res) => {
    const userId = req.user.id;

    try {
        const feedback = await Feedback.find({ userId }).sort({ createdAt: -1 });
        res.status(200).json(feedback);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = {
    GenerateFeedback,
    GetFeedback
}