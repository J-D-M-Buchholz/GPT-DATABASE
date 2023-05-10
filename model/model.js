import mongoose from "mongoose";

const fAS = new mongoose.Schema({
    Text: {
        type: Object,
    }
})

export default mongoose.model("model", fAS)