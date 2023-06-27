const mongoose = require("mongoose");
const usuariosServices = require("../service/auth.service");
const jwt = require("jsonwebtoken");

const segredo = (req, res) => {
  return req.body.cpf;
};

const criarUsuario = async (req, res) => {
  try {
    const usuario = req.body;

    if (Object.keys(usuario).length === 0) {
      return res
        .status(400)
        .send({ message: "O corpo da mensagem está vazio" });
    }

    if (!usuario.cpf) {
      return res.status(400).send({ message: "Campo 'cpf' não encontrado" });
    }

    if (!usuario.nome) {
      return res.status(400).send({ message: "Campo 'nome' não encontrado" });
    }

    if (!usuario.email) {
      return res.status(400).send({ message: "Campo 'email' não encontrado" });
    }

    if (!usuario.senha) {
      return res
        .status(400)
        .send({ message: "Campo senha 'senha' não encontrado" });
    }

    res.status(201).send(await usuariosServices.criarUsuario(usuario));
  } catch (err) {
    console.log(`erro: ${err}`);
    res.status(500).send("Erro no servidor, tente novamente mais tarde");
  }
};

const listarUsuarios = async (req, res) => {
  try {
    //.find() retorna todas as informações do eschema importado(Usuários)
    return res.status(200).send(await usuariosServices.listarUsuarios());
  } catch (error) {
    console.log(`erro: ${err}`);
    res.status(500).send("Erro no servidor, tente novamente mais tarde");
  }
};

const exiberUsuario = async (req, res) => {
  try {
    const cpf = req.params.cpf;
    let found = false;

    // .findOne({ cpf }) para retornar o registro do usuario pelo cpf definido na rota
    const usuario = await usuariosServices.exiberUsuario(cpf);

    if (usuario != null) {
      found = true;
    }

    if (!found) {
      return res.status(404).send({
        message: "Não foi possível encontrar o usuário ou ele não existe",
      });
    }

    return res.status(200).send(usuario);
  } catch (error) {
    console.log(`erro: ${error}`);
    res.status(500).send("Erro no servidor, tente novamente mais tarde");
  }
};

const atualizarUsuario = async (req, res) => {
  try {
    const cpf = req.params.cpf;
    let found = false;
    const usuario = req.body;

    if (usuario != null) {
      found = true;
    }

    if (!found) {
      return res.status(404).send({
        message: "Não foi possível encontrar o usuário ou ele não existe",
      });
    }

    return res
      .status(200)
      .send(await usuariosServices.atualizarUsuario(cpf, usuario));
  } catch (error) {
    console.log(`erro: ${error}`);
    res.status(500).send("Erro no servidor, tente novamente mais tarde");
  }
};

const deletarUsuario = async (req, res) => {
  try {
    const cpf = req.params.cpf;
    let found = false;

    const usuario = await usuariosServices.exiberUsuario(cpf);

    if (usuario != null) {
      found = true;
    }

    if (!found) {
      return res.status(404).send({
        message: "Não foi possível encontrar o usuário ou ele não existe",
      });
    }

    res.status(200).send(await usuariosServices.deletarUsuario(cpf));
  } catch (error) {
    console.log(`erro: ${error}`);
    res.status(500).send("Erro no servidor, tente novamente mais tarde");
  }
};

const loginUsuario = async (req, res) => {
  try {
    //descontrução do objeto body
    const { email, senha } = req.body;

    // authService retorna um usuário válido quando encontra um registro com o mesmo email do argumento
    const user = await usuariosServices.loginService(email);

    // se não existir usuário com o email informado
    if (!user) {
      return res
        .status(400)
        .send({ message: "Usuário não encontrado, tente novamente" });
    }

    // se a senha informada no body não combinar com a senha em banco
    if (senha != user.senha) {
      return res.status(400).send({ message: "Senha inválida" });
    }

    // token formado por user e cpf, onde o secredo (key) é o cpf informada no body da requisição
    const token = usuariosServices.generateToken(user, segredo(req, res));

    // se houver validação positiva
    res.status(200).send({ user, token });

    // se ao tentar e houver erro
  } catch (err) {
    console.log(`Erro: ${err}`);
    res.status(500).send("Erro no servidor, tente novamente mais tarde");
  }
};

const validarToken = (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    const parts = authHeader.split(" ");

    if (parts.length !== 2) {
      return res.status(401).send({ message: "Token inválido" });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
      return res.status(401).send({ message: "Token mal formatado!" });
    }

    // o secredo (key) é o cpf informada no body da requisição

    jwt.verify(token, segredo(req, res), async (err, decoded) => {
      if (err) {
        console.log(`erro: ${err}`);
        res.stauts(500).send({ message: "Erro interno, tente novamente" });
      }
      res.send(decoded);
    });
  } catch (error) {
    res.status(500).send("Erro no servidor, tente novamente mais tarde");
  }
};

module.exports = {
  listarUsuarios,
  criarUsuario,
  exiberUsuario,
  atualizarUsuario,
  deletarUsuario,
  loginUsuario,
  validarToken,
};