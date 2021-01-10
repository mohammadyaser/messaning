const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const teacherSchema = new Schema({
  name: { type: String },
  isActiveTutor: {
    type: Boolean,
    default: false,
  },
  teachingLanguage: {
    type: Object,
  },
  youtubeUrlId: {
    type: String,
    default: "",
  },
  messages: [
    {
      sender: { type: mongoose.Types.ObjectId, required: true, ref: "student" },
      contentInfo: {
        msg: { type: String },
        viewed: { type: Boolean, default: false },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    },
  ],
});

module.exports = model("teacher", teacherSchema);

// trim : method removes whitespace from both ends of a string
