import dotenv from "dotenv";

dotenv.config();

const CONFIG={
    MONGOURI: process.env.MONGO_URI || "",
    PORT:  process.env.PORT || 5000
}

export default CONFIG;