const { Router } = require("express");
const { create } = require("./post.controller");
const { schemas, check } = require("../../middlewares/validation");

const router = Router();

router.route("/");

router
  .route("/:id")
  .get()
  .post(check(schemas.post, "body"), create);

module.exports = router;
