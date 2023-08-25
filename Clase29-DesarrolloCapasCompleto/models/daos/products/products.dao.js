import productModel from "../../schemas/products.schema.js";

export class ProductDAO {
  async getProducts() {
    const products = await productModel.find().lean();
    return products;
  }

  async getProductById(id) {
    const product = await productModel.findOne({ _id: id });
    return product;
  }

}
