const SymptomLog = require("../models/SymptomLog");

const createSymptomLog = async (req, res) => {
  const { sleepQuality, eatingHabits, physicalActivity, notes } = req.body;

  try {
    if (!sleepQuality || !eatingHabits || !physicalActivity) {
      return res.status(400).json({
        status: "error",
        message: "Sleep quality, eating habits, and physical activity are required fields",
      });
    }

    const log = await SymptomLog.create({
      user: req.user.id,
      sleepQuality,
      eatingHabits,
      physicalActivity,
      notes,
    });

    return res.status(201).json({
      status: "success",
      message: "Symptom log created successfully",
      data: log,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      status: "error",
      message: "Server error. Please try again later.",
    });
  }
};

const getUserSymptomLogs = async (req, res) => {
  try {
    const logs = await SymptomLog.find({ user: req.user.id });

    if (logs.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "No symptom logs found",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Symptom logs retrieved successfully",
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

module.exports = { createSymptomLog, getUserSymptomLogs };