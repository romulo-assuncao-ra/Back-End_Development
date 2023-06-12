class pessoa{
    constructor (nome, idade, altura, genero){
        this.nome = nome,
        this.idade = idade,
        this.altura = altura,
        this.genero = genero
    }
    nomeIdade = function(){
            return this.nome + " " + this.idade;
    }
}

class professor extends pessoa{
    constructor (nome, idade, altura, genero, salario, turma){
        super(
            nome,
            idade,
            altura,
            genero
        );
        this.salario = salario,
        this.turma = turma
    }
}

const prof = new professor("Assuncao", 32, 1.70,"M", 3500, 16);

console.log(prof);