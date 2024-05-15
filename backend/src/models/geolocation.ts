const mongoose = require("mongoose");


const geoLocationSchema = new mongoose.Schema({
    street: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true
    },
    zipCode: {
        type: String,
        trim: true
    },
    county: {
        type: String,
        trim: true
    },
    country: {
        type: String,
        trim: true
    },
    latitude: {
        type: String,
        trim: true
    },
    longitude: {
        type: String,
        trim: true
    },
    timeZone: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

export default mongoose.model('GeoLocation', geoLocationSchema);
