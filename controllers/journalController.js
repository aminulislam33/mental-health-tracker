const Journal = require("../models/Journal");

const JournalEntry = async (req, res) => {
    const { journalText, tags, moodLogId } = req.body;
    const userId = req.user.id;

    if (!journalText) {
        return res.status(400).json({ message: "Journal text is required" });
    }
    try {
        const newJournal = new Journal({
            userId,
            journalText,
            tags,
            moodLogId
        });

        const savedJournal = await newJournal.save();
        return res.status(201).json({ status: "success", data: { savedJournal } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const GetJournalEntries = async (req, res) => {
    const userId = req.user.id;

    try {
        const journals = await Journal.find({ userId }).sort({ timestamp: -1 });
        res.status(200).json(journals);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = {
    JournalEntry,
    GetJournalEntries
}