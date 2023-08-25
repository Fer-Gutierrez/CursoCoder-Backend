import { HttpError, HTTP_STATUS } from "../utils/response.js";
import { getDAOS } from "../models/daos/index.dao.js";

const { businessDAO, productDAO } = getDAOS();

export class BusinessService {
  async getBusinesses() {
    const businesses = await businessDAO.getBusinesses();
    return businesses;
  }

  async getBusinessById(id) {
    if(!id) throw new HttpError("Faltan params", HTTP_STATUS.BAD_REQUEST)
    const business = await businessDAO.getBusinessById(id);
    if(!business) throw new HttpError("No se encontró el id del business",HTTP_STATUS.NOT_FOUND)
    return business;
  }

  async createBusiness(payload) {
    const {name, products} = payload;
    if(!name || !products) throw new HttpError("Falta params", HTTP_STATUS.BAD_REQUEST)

    if(!Array.isArray(products) ||!products.length) throw new HttpError("Products no es array o no tiene items", HTTP_STATUS.BAD_REQUEST)
    
    const productFilter = {_id: {$in:products}}
    const productDB = await productDAO.getProducts(productFilter)
    
    const neBusiness = {
        name,
        products
    }

    const result = await businessDAO.createBusiness(neBusiness);
    if(!result) throw HttpError("No se encontró el id del business",HTTP_STATUS.NOT_FOUND)
    return result;
  }
}
