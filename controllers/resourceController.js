const Resource = require("../models/Resource");

const NewRource = async (req, res) => {
    const { title, description, type, content, fileUrl, tags } = req.body;

    try {
        const newResource = new Resource({
            title,
            description,
            type,
            content,
            fileUrl,
            tags
        });

        const savedResource = await newResource.save();
        res.status(201).json(savedResource);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const RetrieveResources = async (req, res) => {
    try {
        const resources = await Resource.find().sort({ createdAt: -1 });
        res.status(200).json(resources);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const RetrieveResourcesByType = async (res, res) => {
    const { type } = req.params;

    try {
        const resources = await Resource.find({ type }).sort({ createdAt: -1 });
        res.status(200).json(resources);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = {
    NewRource,
    RetrieveResources,
    RetrieveResourcesByType
}