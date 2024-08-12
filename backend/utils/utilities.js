const jwt = require('jsonwebtoken');

function authApplicant(req, res, next) {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
        return res.status(401).json({ message: "Authorization header missing" });
    }

    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.sendStatus(401).json({message: "Token missing in Authorization header"});

    jwt.verify(token, process.env.APPLICANT_TOKEN_SECRET, (err, application) => {
        if (err) return res.sendStatus(401);
        req.application = application;
        next();
    });
}

function authAdmin(req, res, next) {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
        return res.status(401).json({ message: "Authorization header missing" });
    }

    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.sendStatus(401).json({message: "Token missing in Authorization header"});

    jwt.verify(token, process.env.ADMIN_TOKEN_SECRET, (err, admin) => {
        if (err) {
            console.error("Token verification error:", err);
            return res.status(401).json({ message: "Invalid token" });
        }
        req.admin = admin
        next();
    });
}

module.exports = {
    authApplicant,
    authAdmin,
}