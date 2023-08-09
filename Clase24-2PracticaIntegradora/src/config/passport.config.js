import passport from "passport";
import local, { Strategy } from "passport-local";
import Users from "../dao/dbManagers/users.js";
import { createHash, isValidPassword } from "../utils.js";

const LocalStrategy = local.Strategy;
const userService = new Users();

const initializedPassport = async () => {
  passport.use(
    "register",
    new LocalStrategy(
      {
        passReqToCallback: true,
        usernameField: "email",
        session: false,
      },
      async (req, email, password, done) => {
        try {
          const { firs_name, last_name, birthDate, dni, gender } = req.body;
          //Validaciones de los datos
          if (
            !firs_name ||
            !last_name ||
            !birthDate ||
            !dni ||
            !gender ||
            !password
          )
            return done(null, false, { message: "Incomplete values" });
          const exist = await userService.getBy({ email });
          if (exist)
            return done(null, false, { message: "User email alredy exists." });

          //Hash del password:
          const hashPassword = createHash(password);

          //Creamos y guardamos el usuario
          const newUser = {
            firs_name,
            last_name,
            birthDate,
            gender,
            dni,
            password: hashPassword,
            email,
          };
          let result = await userService.saveUser(newUser);
          return done(null, result);
        } catch (error) {
          done(error, false);
        }
      }
    )
  );

  passport.use(
    "login",
    new LocalStrategy(
      {
        passReqToCallback: true,
        usernameField: "email",
        session: false,
      },
      async (email, password, done) => {
        try {
          const user = await userService.getBy({ email });
          if (!user) return done(null, false, { message: "user not found" });

          const validatePassword = await isValidPassword(user, password);
          if (!validatePassword)
            return done(null, false, { message: "password incorrect" });

          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser(async (id, done) => {
    let result = await userService.getBy({ _id: id });
    return done(null, result);
  });
};

export default initializedPassport;
