const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const studentSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxLength: 32,
  },
  surname: {
    type: String,
    trim: true,
    required: true,
    maxLength: 32,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true,
    lowercase: true,
  },
  initials: String,
  hashed_password: {
    type: String,
    required: true,
  },
  salt: String,
  role: {
    type: String,
  },
  profilePicture: {
    data: String,
    default: "",
  },
  cloudinary_id: {
    type: String,
  },
  resetPasswordLink: {
    data: String,
    default: "",
  },
  messages: [
    {
      receiver: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "teacher",
      },
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
},{timestamps: true});

module.exports = model("student", studentSchema);

// trim : method removes whitespace from both ends of a string
