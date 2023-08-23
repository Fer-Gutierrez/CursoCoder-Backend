import { successResponse } from "../utils/utils.js";
import getDAOS from "../models/dos.factory.js";
import { SaveContactDTO } from "../models/dtos/contacts.dto.js";


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

  static async saveContact(req, res, next) {
    const payload = req.body;
    const { name, lastName, email } = payload;
    try {
      if (!name || !email || !lastName) {
        throw new Error('[BAD REQUEST]');
      }
      const contactPayload= new SaveContactDTO(payload)
      const newContact = await contactsDAO.save(contactPayload);
      const response = successResponse(newContact);
      res.status(201).json(response);
    }
    catch(error) {
      next(error);
    }
  }
}
