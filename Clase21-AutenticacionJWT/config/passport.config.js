import passport from "passport";
import local from "passport-local";

import userModel from "../models/user.model.js";
import { createHash, isValidPassword } from "../utils.js";

const LocalStrategy = local.Strategy;
const initializedPassport = () => {
  passport.use(
    "register",
    new LocalStrategy(
      {
        passReqToCallback: true,
        usernameField: "email",
      },
      async (req, username, pass, done) => {
        const { first_name, last_name, email, age, password } = req.body;
        try {
          let user = await userModel.findOne({ email: username });
          if (user) {
            console.log(`el usuario ${username} ya existe`);
            return done(`el usuario ${username} ya existe`);
          }
          const newUser = {
            first_name,
            last_name,
            email,
            age,
            password: createHash(pass),
          };
          let result = await userModel.create(newUser);
          return done(null, result);
        } catch (error) {
          return done(`Error: ${error}`, null);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    let user = await userModel.findById(id);
    done(null, user);
  });
};

export default initializedPassport;
