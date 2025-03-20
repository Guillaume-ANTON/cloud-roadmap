const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Erreur de connexion MongoDB :"));
db.once("open", () => console.log("🟢 Connecté à MongoDB"));

app.get("/", (req, res) => {
  res.json({ message: "API Node.js avec MongoDB fonctionne !" });
});

const TestModel = mongoose.model("Test", new mongoose.Schema({ name: String }));

app.get("/add", async (req, res) => {
  await TestModel.create({ name: "Test Data" });
  res.json({ message: "Donnée ajoutée !" });
});

app.listen(PORT, () => console.log(`Serveur lancé sur http://localhost:${PORT}`));
