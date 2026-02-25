const Router = require("express");
const router = new Router();
const deviceRouter = require("./device.router");
const brandRouter = require("./brand.router");
const userRouter = require("./user.router");
const typeRouter = require("./type.router");

router.use("/device", deviceRouter);
router.use("/brand", brandRouter);
router.use("/user", userRouter);
router.use("/type", typeRouter);

module.exports = router;
