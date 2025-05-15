import express from "express";
import { config } from "dotenv";
import connectDB from "./config/db.config.js";
import authorRoutes from "./routes/author.route.js";
import bookRoutes from "./routes/book.route.js";

config();
connectDB();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    return res.json({ status: "ok", message: "Running" });
});

app.use("/api/authors", authorRoutes);
app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
    console.log(`Server runnning on port ${PORT}`);
});
