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
    location: {
        type: {
            type: String,
            default: "Point",
        },
        coordinates: {
            type: [Number],
        }
    },
    timeZone: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

geoLocationSchema.index({
    location: "2dsphere",
});

export default mongoose.model('GeoLocation', geoLocationSchema);
