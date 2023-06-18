const express = require("express");
const usuarios = require("./router/usuarios.routes");
const app = express();

const port = 3000;

app.use(express.json());
app.use("/usuarios", usuarios);

app.get("/", (req,res) => {
    res.send(`
    
    <a href='usuarios/listaUsuarios'><h2>Lista Usuários</h2></a>
    
    `)
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`); // http:// -> para ser exibido como link no terminal
    });