import app from "../app";
import { agent as request } from "supertest";


describe("GEOLOCATION BACKEND SERVER", () => {
    it("should respond with '' for GET '/'", async () => {
        const response = await request(app).get("/");
        expect(response.status).toBe(200);
        expect(response.text).toBe(
            "GEOLOCATION BACKEND SERVER"
        );
    });

    it("should respond with a 404 for routes that do not exist", async () => {
        const response = await request(app).get("/404");
        expect(response.status).toBe(404);
        expect(response.body?.message).toBe("Route does not exist");
    });
});
