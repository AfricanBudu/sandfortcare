import mongoose from "mongoose";

const { Schema } = mongoose;

const adminSchema = new Schema({
    email: { 
        type: String, 
        required: true, 
        unique: true, 
    },
    password: { 
        type: String, 
        required: true,
    },
    
})

export default mongoose.model("Admin", adminSchema);