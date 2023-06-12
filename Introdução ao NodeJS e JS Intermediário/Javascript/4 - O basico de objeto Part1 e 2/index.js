const { Conta } = require("./funcoes");

const novaConta = new Conta(12345, 001, "123.123.123-72", 100);
console.log(novaConta.saldo);

novaConta.depositar(250);
console.log(novaConta.saldo);

novaConta.sacar(100);
//Duas formas de mostrar o resultado do método sacar
//Primeira usando console.log
console.log(novaConta.sacar(100));
//Segunda usando uma constante para recebero valor e exibir
const message = novaConta.sacar(400);
console.log(message);
