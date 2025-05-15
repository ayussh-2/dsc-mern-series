import express from "express";
import { config } from "dotenv";

config();
const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
    return res.json({ status: "ok", message: "Running" });
});

app.listen(PORT, () => {
    console.log(`Server runnning on port ${PORT}`);
});
