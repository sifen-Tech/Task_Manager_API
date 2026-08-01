const taskController = require("../controllers/taskController");
const express = require("express");
const router = express.Router();
router.get("/", taskController.getAll);
router.get("/:id", taskController.getOne);
router.post("/", taskController.create);
router.delete("/:id", taskController.remove);
router.patch("/:id", taskController.update);
module.exports = router;
