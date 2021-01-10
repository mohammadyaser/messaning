const express = require("express");
const messageController = require("./controller");
const { validator } = require("../../../middleware/joi-validator");
const checkAccess = require("../../../middleware/check-acess");
const checkAuth = require("../../../middleware/check-auth");

const router = express.Router();

router.post("/:sid/to/:tid", messageController.sendMessage);//implemented

router.get("/", messageController.getALLMessages);//Not implemented

router.get("/:id", messageController.getMessageById);//Not implemented

router.post("/", messageController.createMessage);//Not implemented

router.patch("/:id", messageController.updateMessage);//Not implemented

router.delete("/:id", messageController.deleteMessage);//Not implemented

module.exports = router;
