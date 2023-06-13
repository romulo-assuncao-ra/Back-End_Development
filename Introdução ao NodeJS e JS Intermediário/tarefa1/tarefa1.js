class administrador{
    constructor( nome, idade, endereco, email, genero){
        this.nome = nome,
        this.idade = idade,
        this.endereco = endereco,
        this.email = email,
        this.genero =genero
    }
    infos = function(){
        return this.name +" "+ this.email;
    }
}

class usuario extends administrador{
    constructor( nome, idade, endereco, email, genero, usuario, senha){
        super(
            nome,
            idade,
            endereco,
            email,
            genero
        );
        this.usuario = usuario,
        this.senha = senha
        }

        infos = function(){
            return this.name +" "+ this.usuario +" "+ this.senha;
        }
    }

    /*const user = new usuario("Rômulo",32,"rua cinco de maio","romulo@gmail.com","M", "assuncao",123456); 
    console.log(user);*/

    const jsonLogin = '{"nome": "Rômulo", "idade":32, "endereco":"rua cinco de maio",   '