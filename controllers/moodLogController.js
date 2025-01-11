const MoodLog = require("../models/MoodLog");

const createMoodLog = async (req, res) => {
  const { mood, energyLevel, notes } = req.body;

  try {
    if (!mood || !energyLevel) {
      return res.status(400).json({
        status: "error",
        message: "Mood and energy level are required fields",
      });
    }

    const log = await MoodLog.create({
      user: req.user.id,
      mood,
      energyLevel,
      notes,
    });

    return res.status(201).json({
      status: "success",
      message: "Mood log created successfully",
      data: log,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "Server error. Please try again later.",
    });
  }
};

const getUserMoodLogs = async (req, res) => {
  try {
    const logs = await MoodLog.find({ user: req.user.id });

    if (logs.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "No mood logs found",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Mood logs retrieved successfully",
      data: logs,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      status: "error",
      message: "Server error. Please try again later.",
    });
  }
};

module.exports = { createMoodLog, getUserMoodLogs };