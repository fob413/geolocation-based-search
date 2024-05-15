import app from "./app";
import CONFIG from "./utils/config";
import Database from "./models/database";

const port = CONFIG.PORT;

// database setup
Database.on("error", (error) => {
   console.log(error);
});

// start app after database is connected
Database.once("connected", () => {
    console.log(">>> Database Connected");

    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
});

export default app;
