const Router = require("express");
const router = new Router();
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/sign-up", userController.registration);
router.post("/sign-in", userController.login);
router.get("/auth", authMiddleware, userController.check);

module.exports = router;
