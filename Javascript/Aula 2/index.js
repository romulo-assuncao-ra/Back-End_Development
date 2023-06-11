const pessoa = {
    nome: "Rômulo",
    sobrenome: "Assunção",
    altura: 1.70,
    idade: 32,

    envelhecer:function(anos){
        this.idade += anos;
    }
};

console.log(typeof(pessoa));
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);
pessoa.envelhecer(3);
console.log(pessoa.idade);