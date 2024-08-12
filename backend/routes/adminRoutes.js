import express from "express";
import { loginAdmin, getAllApplications } from "../controllers/adminController.js";
import { authAdmin } from "../middleware/auth.js";

const router = express.Router();

router.post("/login", loginAdmin);
router.post("/applications", authAdmin, getAllApplications);

export default router;