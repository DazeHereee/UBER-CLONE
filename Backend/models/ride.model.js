const mongoose = require('mongoose');
const captainModel = require('./captain.model');

const rideSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    captain:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'captain',
    },
    pickup:{
        type: String,
        required: true
    },
    destination:{
        type: String,
        required: true
    },

    fare:{
        type: Number,
        required: true
    },
    status:{
        type: String,
        enum: ['pending', 'accepted','ongoing', 'completed', 'cancelled'],
        default: 'pending'
    },
    duration:{
        type: Number,
    },
    distance:{
        type: Number,
    },
    paymentId:{
        type: String,
    },
    orderId:{
        type: String,
    },
    signature:{
        type: String,
    },
    otp:{
        type: String,
        select: false,
        required: true
    }
})

const rideModel = mongoose.model('Ride',rideSchema);
module.exports = rideModel;