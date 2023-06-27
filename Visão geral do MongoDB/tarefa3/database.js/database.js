const mongoose = require("mongoose");

function connectToDatabase() {
  mongoose.connect("mongodb://localhost:27017/aulas", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    return console.log("MONGO DB CONECTADO")
  }).catch((err) => {
    return console.log(`NÃO FOI POSSÍVEL CONECTAR AO BANCO: ${err}`);
  });
}

module.exports = connectToDatabase;