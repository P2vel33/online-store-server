const uuid = require("uuid");
const path = require("path");
const { Device } = require("../models/models");
const ApiError = require("../error/ApiError");

class DeviceController {
  async create(req, res) {
    try {
      const { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      });
      return res.json(device);
    } catch (error) {
      return next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    try {
      const { brandId, typeId, limit, page } = req.query;
      page = page || 1;
      limit = limit || 9;
      let offset = page * limit - limit;
      let devices;
      if (!brandId && !typeId) {
        devices = await Device.findAndCountAll({ limit, offset });
      }
      if (brandId && !typeId) {
        devices = await Device.findAndCountAll({ where: { brandId } });
      }
      if (!brandId && typeId) {
        devices = await Device.findAndCountAll({ where: { typeId } });
      }
      if (brandId && typeId) {
        devices = await Device.findAndCountAll({ where: { typeId, brandId } });
      }
      return res.json(devices);
    } catch (error) {
      return next(ApiError.badRequest(e.message));
    }
  }
  async getOne(req, res) {}
}

module.exports = new DeviceController();
