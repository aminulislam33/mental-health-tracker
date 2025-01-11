const TriggerPanicAlert = async (req,res)=>{
    const userId = req.user.id;  // Assuming the user is authenticated
  const { action, description } = req.body;  // Action (e.g., 'EmergencyHelpline', 'TrustedContact', 'Both')
  
  try {
    const newAlert = new PanicAlert({
      userId,
      action,
      description
    });

    const savedAlert = await newAlert.save();
    res.status(201).json({ message: "Panic alert triggered", alert: savedAlert });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
    TriggerPanicAlert,
}