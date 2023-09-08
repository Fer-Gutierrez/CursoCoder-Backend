export const generateUserError = (user) => {
  return `Las propiedades no estan compeltas
    *user.first_name: El primer nombre ${user.first_name}
    *apellido necesario ${user.last_name}
    *correo obligatorio ${user.email}`;
};
