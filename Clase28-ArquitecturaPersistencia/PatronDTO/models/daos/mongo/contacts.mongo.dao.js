import { MongoManager } from "../../db/mongo/mongo.manager.js";
import ContactsModel from "../../schemas/contacts.schema.js";

export class ContactsMongoDAO{
    constructor(){
        MongoManager.start()
    }

    async getAll(){
        return await ContactsModel.find().lean();
    }

    async save(contactPayload) {
        const newContact = await ContactsModel.create(contactPayload);
        return newContact;
      }
}