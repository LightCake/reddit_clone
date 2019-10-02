const { Router } = require("express");
const { schemas, check } = require("../../middlewares/validation");
const {
  signup,
  signin,
  refresh_token,
  revoke_refresh_token
} = require("./user.controller");

const router = Router();

router.post("/signup", check(schemas.signup, "body"), signup);
router.post("/signin", check(schemas.signin, "body"), signin);
router.post("/refresh_token", refresh_token);
router.post("/revoke_refresh_token", revoke_refresh_token);

module.exports = router;
