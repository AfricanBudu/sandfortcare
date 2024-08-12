import Application from "../models/application.model.js";
import jwt from "jsonwebtoken";

export const applyForApplication = async (req, res) => {
    const { firstName, lastName, email, phone, parent, ageRange, state } = req.body;

    const application = new Application({
        firstName,
        lastName,
        email,
        phone,
        parent,
        ageRange,
        state,

    });

    await application.save();

    const applicantToken = jwt.sign({ application }, process.env.APPLICANT_TOKEN_SECRET, {
        expiresIn: "36000m"
    });

    return res.json({
        error: false,
        application,
        applicantToken,
        message: "Application Successful",
    })

}