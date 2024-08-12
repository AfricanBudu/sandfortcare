import Admin from "../models/admin.model.js";
import Application from "../models/application.model.js";
import jwt from "jsonwebtoken";

export const loginAdmin = async (req, res) => {
    const { email, password } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }

    if (!password) {
        return res.status(400).json({ message: "Password is required" });
    }

    const adminInfo = await Admin.findOne({ email: email });

    if (!adminInfo) {
        return res.status(400).json({ message: "Admin not found"});
    }

    if (adminInfo.email == email && adminInfo.password == password) {
        const adminToken = jwt.sign({id:adminInfo._id}, process.env.ADMIN_TOKEN_SECRET, {
            expiresIn: "1hr",
        });

        return res.status(200).json({
            error: false,
            message: "Admin Logged in Successfully",
            email,
            adminToken,
        });
    }   else {
        return res.status(400).json({
            error: true,
            message: "Invalid Credentials",
        });
    }
};

export const getAllApplications = async (req, res) => {
    try {
        const applications = await Application.find().sort({ createdAt: -1});
        return res.status(200).json({
            error: false,
            applications,
            message: "All Applications retrieved successfully",
        });
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching applications', error: error.message });
    }
}