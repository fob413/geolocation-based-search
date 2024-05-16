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
        "latitude": "-15.739",
        "longitude": "-21.276",
        "__v": 0,
        "createdAt": "2024-05-16T03:44:00.301Z",
        "updatedAt": "2024-05-16T03:44:00.301Z"
    },
    {
        "street": "685 Quitzon Green",
        "city": "West Brendonville",
        "county": "Isle of Wight",
        "country": "Cyprus",
        "latitude": "-64.756",
        "longitude": "53.22",
        "__v": 0,
        "createdAt": "2024-05-16T03:44:00.302Z",
        "updatedAt": "2024-05-16T03:44:00.302Z"
    },
    {
        "street": "1432 Cronin Shoal",
        "city": "Bellingham",
        "county": "Hampshire",
        "country": "New Caledonia",
        "latitude": "16.558",
        "longitude": "-45.451",
        "__v": 0,
        "createdAt": "2024-05-16T03:44:00.302Z",
        "updatedAt": "2024-05-16T03:44:00.302Z"
    },
    {
        "street": "571 Kihn Expressway",
        "city": "Marionton",
        "county": "Rutland",
        "country": "Virgin Islands, U.S.",
        "latitude": "-82.708",
        "longitude": "75.622",
        "__v": 0,
        "createdAt": "2024-05-16T03:44:00.302Z",
        "updatedAt": "2024-05-16T03:44:00.302Z"
    },
    {
        "street": "1295 Reynold Crossing",
        "city": "Marionton",
        "county": "Herefordshire",
        "country": "Iran",
        "latitude": "-52.383",
        "longitude": "71.412",
        "__v": 0,
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
    });

    afterAll(async () => {
        await GeoLocationModel.deleteMany({});
        await Mongoose.connection.close();
    });

   it("should successfully retrieve geo-locations", async () => {
        const response = await request(app).get(geoLocationUrl);
        expect(response.status).toBe(200);
        expect(response.body.status).toBe("success");
        expect(response.body.message).toBe("Successfully retrieved geo-locations")
       expect(response.body.data.length).toBe(5);
   });
});
