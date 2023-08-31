import express from "express";
import twilio from "twilio";
import dotenv from "dotenv";

const app = express();

dotenv.config();

const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_NUMBERS = "+19285994467";

const client = new twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

app.use("/sms", async (req, res) => {
  let message = await client.messages.create({
    body: "Este es un mensaje de prueba",
    from: TWILIO_NUMBERS,
    to: "+543492625268",
  });

  res.send({ status: "seccess", result: "mensaje enviado" });
});

app.listen(8080, () => console.log("Server Up"));
