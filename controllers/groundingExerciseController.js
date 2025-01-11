const RetrieveAllGroundingExercises = async (req, res) => {
    try {
        const exercises = await GroundingExercise.find().sort({ createdAt: -1 });
        res.status(200).json(exercises);  // Return list of exercises
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const RetrieveGroundingExercisesByType = async (req, res) => {
    const { type } = req.params;

    try {
        const exercises = await GroundingExercise.find({ type }).sort({ createdAt: -1 });
        res.status(200).json(exercises);  // Return exercises of the specified type
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = {
    RetrieveAllGroundingExercises,
    RetrieveGroundingExercisesByType
}