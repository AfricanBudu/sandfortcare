import express from "express";
import { applyForApplication } from "../controllers/applicationController.js";

const router = express.Router();

router.post("/apply", applyForApplication);

export default router;