import dotenv from "dotenv";
import params from "./params.js"

const mode = params.mode; //development o prd

dotenv.config({
    path: `./.env.${mode}`
})

export default {
    PORT: process.env.PORT,
    MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING,
    COOKIE: process.env.COOKIE
}