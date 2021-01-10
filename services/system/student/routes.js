const express = require("express");
const studentsController = require("./controller");
const { validator } = require("../../../middleware/joi-validator");
const checkAccess = require("../../../middleware/check-acess");
const checkAuth = require("../../../middleware/check-auth");

const router = express.Router();


router.get("/message/:sid", studentsController.getAllReceiverInfo);//implemented

router.get("/", studentsController.getALLStudents);//Not implemented

router.get("/:id", studentsController.getStudentById);//Not implemented

router.post("/", studentsController.createStudent);//implemented

router.patch("/:id", studentsController.updateStudent);//Not implemented

router.delete("/:id", studentsController.deleteStudent); //Not implemented

module.exports = router;
