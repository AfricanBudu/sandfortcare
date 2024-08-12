import mongoose from "mongoose";

const { Schema } = mongoose;

const applicationSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    phone: { type: String },
    parent: { type: String },
    ageRange: { type: String },
    state: { type: String },
    createdAt: { type: Date, default: new Date().getTime() },
});

export default mongoose.model("Application", applicationSchema);