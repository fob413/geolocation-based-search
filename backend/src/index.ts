import app from "./app";
import CONFIG from "./utils/config";

const port = CONFIG.PORT;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

export default app;
