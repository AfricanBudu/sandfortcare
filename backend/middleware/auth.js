import jwt from "jsonwebtoken";

export const authAdmin = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!authHeader) {
        return res.status(401).json({ message: "Authorization header missing" })
    };

    if (!token) return res.sendStatus(401).json({message: "Token missing in Authorization header"});
    jwt.verify(token, process.env.ADMIN_TOKEN_SECRET, (err, admin) => {
        if (err) return res.sendStatus(401);
        req.admin = admin;
        next();
    });
};

export const authApplicant = (req, res, next) => {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
        return res.status(401).json({ message: "Authorization header missing" });
    }

    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.sendStatus(401).json({message: "Token missing in Authorization header"});

    jwt.verify(token, process.env.APPLICANT_TOKEN_SECRET, (err, applicant) => {
        if (err) {
            console.error("Token verification error:", err);
            return res.status(401).json({ message: "Invalid token" });
        }
        req.applicant = applicant
        next();
    });
};