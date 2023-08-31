import nodemailer from "nodemailer";
import express from "express";
import __dirname from "./utils/utils.js";

const app = express();

/*
 * Antes de comenzar debemos habilitar la cuenta para enviar los emails.
 * Para Google debemos hacer lo sigueinte::
 * 1. Habilitamos la verificacion en dos pasos
 * 2. Creamos una contraseña de  aplicaciones (necesitamos verificacion en dos pasos para esto)
 * 3.  Guardamos la  contraseña que nos proporciona Google
 */

const transport = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: "coderprofeandrea@gmail.com",
    pass: "nrlkftuydhoqcoyu", //Esta es la contraseña que te proporciona Google para ingresar en las applicaciones
  },
});

app.get("/mail", async (req, res) => {
  try {
    const mailParams = {
      from: "coderprofeandrea@gmail.com",
      to: "fernandoezequiel333@gmail.com",
      subject: "Test Mail Modificado con un adjunto",
      html: `
            <div>
                <h1>Esto es una prueba de mail</h1>
            </div>
            `,
      attachments: [
        {
          filename: "perrito.jpeg",
          path: process.cwd() + "/public/perrito.jpeg",
          cid: "perrito",
        },
      ],
    };
    const result = await transport.sendMail(mailParams);
    res.send("Mail Enviado");
  } catch (error) {
    console.log(error);
  }
});

app.listen(8080, () => console.log("Server Up"));
