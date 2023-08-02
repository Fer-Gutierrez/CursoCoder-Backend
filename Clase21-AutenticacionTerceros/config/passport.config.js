import passport from "passport";
import local from "passport-local";

import userModel from "../models/user.model.js";
import { createHash, isValidPassword } from "../utils.js";
import GitHubStrategy from "passport-github2";

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

  passport.use(
    "github",
    new GitHubStrategy(
      {
        clientID: "Iv1.c82df0e66a34dd0a",
        clientSecret: "8689344e665e37a72ff28b01ac5cf97e845bedc3",
        callbackURL: "http://localhost:8080/api/session/githubcallback",
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          let user = await userModel.findOne({ email: profile._json.email });
          if (!user) {
            let newUser = {
              first_name: profile._json.name,
              last_name: "",
              email: profile._json.email,
              age: "",
              password: "",
            };
            let result = await userModel.create(newUser);
            done(null, result);
          } else {
            done(null, user);
          }
        } catch (error) {
          done(`No fue posible loguearse con GitHub: ${error}`);
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

const initPassport = () => {};

export default initializedPassport;
