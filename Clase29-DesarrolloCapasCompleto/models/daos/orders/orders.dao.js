import orderModel from "../../schemas/orders.schema.js";

export class OrderDAO {
  async getOrders() {
    const orders = await orderModel.find().lean();
    return orders;
  }

  async getOrderById(id) {
    const order = await orderModel.findOne({ _id: id });
    return order;
  }

  async createOrder(payload) {
    const order = await orderModel.create(payload);
    return order;
  }

  async updateOrder(id, newOrder) {
    const order = await orderModel.updateOne({ _id: id }, { $set: newOrder });
    return order;
  }
}
