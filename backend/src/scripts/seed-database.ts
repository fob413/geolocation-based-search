import Mongoose from "mongoose";
import Config from "../utils/config";
import { GeoLocationModel } from "../models";
const csv = require("csvtojson");


type GeoLocationType = {
    street: string;
    city: string;
    zipCode: string;
    county: string;
    country: string;
    longitude: number;
    latitude: number;
    time_zone: string;
}

const csvFilePath = `${__dirname}/../assets/geolocation_data.csv`;

const seedDatabase = async () => {
    try {
        console.log(">>> Seeding in Progress");

        await Mongoose.connect(Config.DBURL);
        await GeoLocationModel.deleteMany({});

        const geoLocations = await csv().fromFile(csvFilePath);

        const formattedGeoLocations = geoLocations.map((location: GeoLocationType) => ({
            street: location.street,
            city: location.city,
            zipCode: location.zipCode,
            county: location.county,
            country: location.country,
            location: {
                type: "Point",
                coordinates: [location.longitude, location.latitude]
            },
            timeZone: location.time_zone
        }));

        await GeoLocationModel.insertMany(formattedGeoLocations);
        console.log('>>> Seeding Completed');
    } catch (error) {
        console.error("Error seeding database", error);
    } finally {
        await Mongoose.disconnect();
    }
}

seedDatabase();
