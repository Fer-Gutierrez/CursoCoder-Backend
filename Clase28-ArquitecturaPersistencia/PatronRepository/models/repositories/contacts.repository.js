import getDAOS from "../dos.factory.js";
import { SaveContactDTO } from "../dtos/contacts.dto.js";

const { contactsDAO } = getDAOS();

export class ContactsRepository {
  constructor() {
    this.dao = contactsDAO;
  }

  async gerAllContacts() {
    return await this.dao.getAll();
  }

  async SaveCaontact(payload) {
    const contactPayload = new SaveContactDTO(payload);
    return await this.dao.save(contactPayload);
  }
}
