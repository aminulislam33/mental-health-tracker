const PeerSupportGroup = require("../models/PeerSupportGroup");

const NewPeerSupportGroup = async (req, res) => {
    const { groupName, description } = req.body;
    const userId = req.user.id;

    try {
        const newGroup = new PeerSupportGroup({
            groupName,
            description,
            createdBy: userId,
            members: [userId]
        });

        const savedGroup = await newGroup.save();
        res.status(201).json(savedGroup);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const JoinPeerSupportGroup = async (req, res) => {
    const { groupId } = req.params;
    const userId = req.user.id;  // Assuming the user is authenticated via middleware

    try {
        const group = await PeerSupportGroup.findById(groupId);

        // Add user to the group if they are not already a member
        if (!group.members.includes(userId)) {
            group.members.push(userId);
            await group.save();
            res.status(200).json(group);  // Return the updated group
        } else {
            res.status(400).json({ message: "You are already a member of this group." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const RetriveAllSupportGroups = async (req, res) => {
    try {
        const groups = await PeerSupportGroup.find().sort({ createdAt: -1 });  // Latest groups first
        res.status(200).json(groups);  // Return groups
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = {
    NewPeerSupportGroup,
    JoinPeerSupportGroup,
    RetriveAllSupportGroups
}