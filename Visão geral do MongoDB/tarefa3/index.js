const express = require("express");
const connectToDatabase = require("./database/database");
const usuarios = require("./router/usuarios.router");

connectToDatabase();

const app = express();

const port = 3000;

app.use(express.json());
app.use("/usuarios", usuarios); 

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/view/home.html");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});