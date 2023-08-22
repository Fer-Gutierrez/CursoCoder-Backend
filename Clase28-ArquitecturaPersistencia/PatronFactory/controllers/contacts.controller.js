import { successResponse } from "../utils/utils.js";
import getDAOS from "../models/dos.factory.js";

const { contactsDAO } = getDAOS();

export class ContractController {
  static async getAllContracts(req, res, next) {
    try {
      const contacts = await contactsDAO.getAll();
      const response = successResponse(contacts);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
}
