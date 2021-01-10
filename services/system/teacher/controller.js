const HttpError = require("../../../util/http-error");
const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");
const Teacher = require("./model");

const getALLTeachers = async (req, res, next) => {
  console.log("getALLTeachers");
};
const getTeacherById = async (req, res, next) => {
  console.log("getTeacherById");
};

const createTeacher = async (req, res, next) => {
  let { name } = req.body;
  let teacher = new Teacher({
    name: name,
  });
  await teacher.save();
  res.status(200).json({ teacherId: teacher._id });
};

const updateTeacher = async (req, res, next) => {
  console.log("updateTeacher");
};
const deleteTeacher = async (req, res, next) => {
  console.log("deleteTeacher");
};

exports.getALLTeachers = getALLTeachers;
exports.getTeacherById = getTeacherById;
exports.createTeacher = createTeacher;
exports.updateTeacher = updateTeacher;
exports.deleteTeacher = deleteTeacher;
