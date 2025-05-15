import express from "express";
import { getAllAuthors } from "../controller/author.controller.js";
const router = express.Router();

router.get("/", getAllAuthors);

export default router;
