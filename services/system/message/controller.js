const HttpError = require("../../../util/http-error");
const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");
const Student = require("../student/model");
const Teacher = require("../teacher/model");

const getALLMessages = async (req, res, next) => {
  console.log("getALLMessages");
};
const getMessageById = async (req, res, next) => {
  console.log("getMessageById");
};

const createMessage = async (req, res, next) => {
  let { name } = req.body;
  let user = new Message({
    name: name,
  });
  await user.save();
  res.status(200).json({ user });
};

const updateMessage = async (req, res, next) => {
  console.log("updateMessage");
};
const deleteMessage = async (req, res, next) => {
  console.log("deleteMessage");
};
const sendMessage = async (req, res, next) => {
  let { sid, tid } = req.params;
  let { text } = req.body;
  let student = await Student.findById(sid);
  let teacher = await Teacher.findById(tid);
  if(!student || !teacher){
    const err = new HttpError("student id or teacher id is not exist", 500);
    return next(err);
  }
  let studentMessage = {
    receiver: tid,
    contentInfo: {
      msg: text,
    },
  };
  let teacherMessage = {
    sender: sid,
    contentInfo: {
      msg: text,
    },
  };
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    student.messages.push(studentMessage);
    await student.save({ session: sess });
    teacher.messages.push(teacherMessage);
    await teacher.save({ session: sess });
    await sess.commitTransaction();
  } catch (error) {
    console.log(error)
    const err = new HttpError("something went wrong", 500);
    return next(err);
  }
  res.status(200).json({ messege : "messeage sended succesfully" });
};

exports.getALLMessages = getALLMessages;
exports.getMessageById = getMessageById;
exports.createMessage = createMessage;
exports.updateMessage = updateMessage;
exports.deleteMessage = deleteMessage;
exports.sendMessage = sendMessage;
