import businessModel from "../../schemas/businesses.schema.js";

export class BusinessesDAO {
  async getBusinesses() {
    const businesses = await businessModel.find().lean();
    return businesses;
  }

  async getBusinessById(id) {
    const business = await businessModel.findOne({ _id: id });
    return business;
  }

  async createBusiness(payload) {
    const business = await businessModel.create(payload);
    return business;
  }

  async addProduct(businessId, productId) {
    const business = await businessModel.updateOne(
      { _id: businessId },
      { $push: { product: productId } }
    );

    return business;
  }
}
