const mongoose = require('mongoose');

// Panic Alert Schema
const PanicAlertSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },  // The user who triggered the panic button
    triggeredAt: {
        type: Date,
        default: Date.now
    },  // Timestamp when the panic button was triggered
    action: {
        type: String,
        enum: ['EmergencyHelpline', 'TrustedContact', 'Both'],  // Action taken after panic button press
        required: true
    },
    description: {
        type: String
    }  // Optional description (e.g., how the user feels or what led to the panic)
}, { timestamps: true });

module.exports = mongoose.model('PanicAlert', PanicAlertSchema);