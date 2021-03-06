const router = require("express").Router();
const controller = require("../../controllers/controller");

// Matches with "/api/books"
router.route("/")
  .get(controller.findAllQuizzes)

// Matches with "/api/books/:id"
router.route("/:id")
  .get(controller.findOneQuiz);

module.exports = router;