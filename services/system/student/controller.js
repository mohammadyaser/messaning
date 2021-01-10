const HttpError = require("../../../util/http-error");
const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");
const Student = require("./model");
const Teacher = require("../teacher/model");

const getALLStudents = async (req, res, next) => {
  console.log("getALLStudents");
};
const getStudentById = async (req, res, next) => {
  console.log("getStudentById");
};

const createStudent = async (req, res, next) => {
  let { name, surname, email, password } = req.body;
  let user = new Student({
    name,
    surname,
    email,
    hashed_password: password,
    role: "user",
  });
  try {
    await user.save();
  } catch (error) {
    console.log(error);
    const err = new HttpError("something went wrong", 500);
    return next(err);
  }
  res.status(200).json({ studentId: user._id });
};

const updateStudent = async (req, res, next) => {
  console.log("updateStudent");
};
const deleteStudent = async (req, res, next) => {
  console.log("deleteStudent");
};

//Lists of people to whom I sent a message
const getAllReceiverInfo = async (req, res, next) => {
  let { sid } = req.params; //student id
  let { messages } = await Student.findById(sid).select("messages");
  let receiverIds = messages.map((msg) => {
    return msg.receiver;
  });
  let receivers = await Teacher.find({ _id: { $in: receiverIds } }).select(
    "name"
  );
  res.status(200).json({
    result: receivers,
  });
};

exports.getALLStudents = getALLStudents;
exports.getStudentById = getStudentById;
exports.createStudent = createStudent;
exports.updateStudent = updateStudent;
exports.deleteStudent = deleteStudent;
exports.getAllReceiverInfo = getAllReceiverInfo;
