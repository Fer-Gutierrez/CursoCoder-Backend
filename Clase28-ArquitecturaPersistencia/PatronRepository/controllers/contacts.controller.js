import { successResponse } from "../utils/utils.js";
import { ContactsRepository } from "../models/repositories/contacts.repository.js";

const contactRepository = new ContactsRepository();

export class ContractController {
  static async getAllContracts(req, res, next) {
    try {
      const contacts = await contactRepository.getAllContracts();
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
      // const contactPayload= new SaveContactDTO(payload)
      const newContact = await contactRepository.SaveCaontact(payload);
      const response = successResponse(newContact);
      res.status(201).json(response);
    }
    catch(error) {
      next(error);
    }
  }
}
