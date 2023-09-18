import mongoose from "mongoose";

const { Schema } = mongoose;

/**question model */
const questionModel = new Schema({
    questions: {
        type: Array,
        default: [],
    },
    language: {
        type: String,
        default: "",
    },
    answers: {
        type: Array,
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model("Question", questionModel);
