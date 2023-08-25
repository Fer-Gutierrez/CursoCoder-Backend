import { BusinessesDAO } from "./businesses/businesses.dao.js";
import { OrderDAO } from "./orders/orders.dao.js";
import { ProductDAO } from "./products/products.dao.js";
import { UserDAO } from "./users/users.dao.js";

const userDAO = new UserDAO();
const productDAO = new ProductDAO();
const businessDAO = new BusinessesDAO();
const orderDAO = new OrderDAO();

export const getDAOS = () => {
  userDAO, orderDAO, businessDAO, productDAO;
};
