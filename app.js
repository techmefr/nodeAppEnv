const express = require("express");
const dotenv = require("dotenv");

dotenv.config(); // Charge les variables d'environnement depuis le fichier .env

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const name = process.env.MY_NAME || "Default Name";
  const city = process.env.MY_CITY || "Default City";
  const language = process.env.MY_LANGUAGE || "Default Language";

  const message = `I am ${name}, wilder in ${city}, and I love ${language}.`;
  res.send(message);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
