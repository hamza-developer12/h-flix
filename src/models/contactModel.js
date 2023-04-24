import mongoose from "mongoose";

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
    }
}, { timestamps: true });
export default mongoose.models.Contact || mongoose.model("Contact", contactSchema);