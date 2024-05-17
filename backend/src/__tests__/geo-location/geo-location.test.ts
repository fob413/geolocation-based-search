import Mongoose from "mongoose";
import app from "../../app";
import Config from "../../utils/config";
import { GeoLocationModel } from "../../models";
import { agent as request } from "supertest";


const data = [
    {
        "street": "1275 Stroman Turnpike",
        "city": "New Ansley",
        "county": "Worcestershire",
        "country": "Gabon",
        "location": {
            type: "Point",
            coordinates: [-21.276, -15.739]
        },
        "createdAt": "2024-05-16T03:44:00.301Z",
        "updatedAt": "2024-05-16T03:44:00.301Z"
    },
    {
        "street": "685 Quitzon Green",
        "city": "West Brendonville",
        "county": "Isle of Wight",
        "country": "Cyprus",
        "location": {
            type: "Point",
            coordinates: [53.22, -64.756]
        },
        "createdAt": "2024-05-16T03:44:00.302Z",
        "updatedAt": "2024-05-16T03:44:00.302Z"
    },
    {
        "street": "1432 Cronin Shoal",
        "city": "Bellingham",
        "county": "Hampshire",
        "country": "New Caledonia",
        "location": {
            type: "Point",
            coordinates: [-45.451, 16.558]
        },
        "createdAt": "2024-05-16T03:44:00.302Z",
        "updatedAt": "2024-05-16T03:44:00.302Z"
    },
    {
        "street": "571 Kihn Expressway",
        "city": "Marionton",
        "county": "Rutland",
        "country": "Virgin Islands, U.S.",
        "location": {
            type: "Point",
            coordinates: [75.622, -82.708]
        },
        "createdAt": "2024-05-16T03:44:00.302Z",
        "updatedAt": "2024-05-16T03:44:00.302Z"
    },
    {
        "street": "1295 Reynold Crossing",
        "city": "Marionton",
        "county": "Herefordshire",
        "country": "Iran",
        "location": {
            type: "Point",
            coordinates: [71.412, -52.383]
        },
        "createdAt": "2024-05-16T03:44:00.302Z",
        "updatedAt": "2024-05-16T03:44:00.302Z"
    },
];
const geoLocationUrl = "/api/v1/geo-location/search"

describe(`GeoLocation route '${geoLocationUrl}'`, () => {
    beforeAll(async () => {
        await Mongoose.connect(Config.DBTESTURL);
        await GeoLocationModel.deleteMany({});

        // seed db with data
        await GeoLocationModel.insertMany(data);

        jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterAll(async () => {
        await GeoLocationModel.deleteMany({});
        await Mongoose.connection.close();
    });

   it("should successfully retrieve geo-locations", async () => {
        const response = await request(app).get(geoLocationUrl);
        expect(response.status).toBe(200);
        expect(response.body.status).toBe("success");
        expect(response.body.message).toBe("Successfully retrieved geo-locations");
        expect(response.body.data?.suggestions.length).toBe(5);
   });

   it("should successfully query geo-locations with user input 'q, longitude, latitude'", async () => {
       const response = await request(app).get(geoLocationUrl + "?q=Cyprus&longitude=53.22&latitude=-64.756");
       expect(response.status).toBe(200);
       expect(response.body.status).toBe("success");
       expect(response.body.message).toBe("Successfully retrieved geo-locations");
   })

   it("should return an error if trying to query with invalid longitude or latitude", async () => {
       const response = await request(app).get(geoLocationUrl + "?longitude=190&latitude=91");
       expect(response.status).toBe(400);
       expect(response.body.status).toBe("error");
       expect(response.body.message).toBe("Invalid coordinates. latitude must be within the range of -90 to 90 and longitude must be within the range -180 to 180");
   });
});
