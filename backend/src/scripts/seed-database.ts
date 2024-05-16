import Mongoose from "mongoose";
import Config from "../utils/config";
import { GeoLocationModel } from "../models";
const csv = require("csvtojson");


const csvFilePath = `${__dirname}/../assets/geolocation_data.csv`;

const seedDatabase = async () => {
    try {
        console.log(">>> Seeding in Progress");

        await Mongoose.connect(Config.DBURL);
        await GeoLocationModel.deleteMany({});

        const geoLocations = await csv().fromFile(csvFilePath);

        await GeoLocationModel.insertMany(geoLocations);
        console.log('>>> Seeding Completed');
    } catch (error) {
        console.error("Error seeding database", error);
    } finally {
        await Mongoose.disconnect();
    }
}

seedDatabase();