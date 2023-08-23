import CONFIG from "../config/config.js";

let contactsDAO;

switch (CONFIG.DATASOURCE) {
  case "MEMORY": {
    const { ContactsMemoryDAO } = await import(
      "./daos/memory/contacts.memory.dao.js"
    );
    contactsDAO = new ContactsMemoryDAO();
    break;
  }
  case "MONGO": {
    const { ContactsMongoDAO } = await import(
      "./daos/mongo/contacts.mongo.dao.js"
    );
    contactsDAO = new ContactsMongoDAO();
    break;
  }
  default: {
    throw new Error("No digitaste una persistencia valida");
  }
}

const getDAOS = () => {
  return {
    contactsDAO,
  };
};

export default getDAOS;
