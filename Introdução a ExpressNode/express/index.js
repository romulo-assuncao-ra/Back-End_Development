const express = require("express"); //Pegamos o express
const app = express();              //Definimos que nossa aplicação é express     

const port = 3000; //Definimos uma porta

app.use(express.json()); //Definimos que nosso app sera do tipo json para interpretar nossas informações


//Definimos o endereços de nossa paginas ou seja aqui que representamos as rotas
app.get("/", (req, res) => {
    res.send("Hello world");
});

app.get("/contato", (req, res) =>{
    res.send("Nosso contato email@gmail.com");
})

//Funciona em tempo real sempre aguardando umma alteração
app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`);
});