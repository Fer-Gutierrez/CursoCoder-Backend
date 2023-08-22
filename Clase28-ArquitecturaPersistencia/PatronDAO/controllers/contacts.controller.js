import { successResponse } from "../utils/utils.js";
import { ContactsMemoryDAO } from "../models/daos/memory/contacts.memory.dao.js";
import { ContactsMongoDAO } from "../models/daos/mongo/contacts.mongo.dao.js";

// const contactsDAO = new ContactsMemoryDAO();
const contactsDAO = new ContactsMongoDAO();

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
