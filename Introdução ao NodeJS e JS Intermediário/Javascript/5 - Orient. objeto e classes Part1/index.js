class Pessoa{
    constructor( nome, idade, altura, genero){
        this.nome = nome,
        this.idade = idade,
        this.altura = altura,
        this.genero =genero
    }
    infos = function(){
        return this.name +" "+ this.idade;
    }
}

class Professor extends Pessoa{
    constructor( nome, idade, altura, genero, salario, turmas){
        super(
            nome,
            idade,
            altura,
            genero
        );
        this.salario = salario,
        this.turmas = turmas
        }

        infos = function(){
            return this.name +" "+ this.turmas +" "+ this.salario;
        }
    }

    class Aluno extends Pessoa{
        constructor( nome, idade, altura, genero, nota, turma, rm){
            super(
                nome,
                idade,
                altura,
                genero
            );
            this.nota = nota,
            this.turma = turma,
            this.rm = rm
            }
    
            infos = function(){
                return this.name +" "+ this.idade +" "+ this.rm;
            }
            
        }

    const prof = new Professor("Rômulo",32,1.70,"M","3500",[16,17,18]);
    const estudante = new Aluno("Assunção", 16, 1.71, "M", 9.76, 14, 121612);
    console.log(prof);
    console.log(estudante);