import { BusinessService } from "../services/business.Service.js";
import { HttpError, HTTP_STATUS, successResponse } from "../utils/response.js";

const businessService = new BusinessService();
export class BusinessController {
  constructor() {}

  static async getBusinesses(req, res, next) {
    try {
      const businesses = await businessService.getBusinesses();
      const response = successResponse(businesses);
      res.sed(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  static async getBusinessesById(req, res, next) {
    try {
      res.send("OK");
    } catch (error) {
      next(error);
    }
  }

  static async createBusinesses(req, res, next) {
    try {
      res.send("OK");
    } catch (error) {
      next(error);
    }
  }

  static async addProductsBusinesses(req, res, next) {
    try {
      res.send("OK");
    } catch (error) {
      next(error);
    }
  }
}
