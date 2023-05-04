import mongoose from "mongoose";

const fAS = new mongoose.Schema({
    Test: {
        type: Object,
    }
})

export default mongoose.model("model", fAS)