const Router = require("express");
const router = new Router();
const userController = require("../controllers/user.controller");

router.post("/signIn", userController.registration);
router.post("/login", userController.login);
router.get("/auth", userController.check);

module.exports = router;
