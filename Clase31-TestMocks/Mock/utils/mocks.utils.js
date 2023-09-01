import { faker } from "@faker-js/faker";

// faker.seed_locale("es");
export const generateProducts = () => {
  return {
    id: faker.database.mongodbObjectId(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    stock: faker.number.int(),
    image: faker.image.avatarGitHub(),
  };
};

export const generateUsers = () => {
  const totalProducts = faker.number.int({ min: 1, max: 4 });
  const products = Array.from({ length: totalProducts }, () =>
    generateProducts()
  );
  return {
    id: faker.database.mongodbObjectId(),
    firs_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    gender: faker.person.gender(),
    birthDate: faker.date.anytime(),
    phone: faker.phone.number(),
    image: faker.image.avatar(),
    products,
    isUserPremium: faker.datatype.boolean(),
    role: faker.helpers.arrayElement(["customer", "seller"]),
  };
};
