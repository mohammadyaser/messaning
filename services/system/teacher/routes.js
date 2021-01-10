const express = require("express");
const teachersController = require("./controller");
const { validator } = require("../../../middleware/joi-validator");
const checkAccess = require("../../../middleware/check-acess");
const checkAuth = require("../../../middleware/check-auth");

const router = express.Router();

router.get("/", teachersController.getALLTeachers);//Not implemented

router.get("/:id", teachersController.getTeacherById);//Not implemented

router.post("/", teachersController.createTeacher);//implemented

router.patch("/:id", teachersController.updateTeacher);//Not implemented

router.delete("/:id", teachersController.deleteTeacher);//Not implemented

module.exports = router;
