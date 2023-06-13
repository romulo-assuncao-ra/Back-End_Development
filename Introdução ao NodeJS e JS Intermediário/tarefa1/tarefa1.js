class administrador{
    constructor( nome, idade, endereco, email, genero){
        this.nome = nome,
        this.idade = idade,
        this.endereco = endereco,
        this.email = email,
        this.genero =genero
    }
    nomeEmail = function(){
        return this.name +" "+ this.email;
    }
}

class usuario extends administrador{
    constructor( nome, idade, endereco, email, genero, login, senha){
        super(
            nome,
            idade,
            endereco,
            email,
            genero
        );
        this.login = login,
        this.senha = senha
        }

        nomeLogin = function(){
            return this.name +" "+ this.login +" "+ this.senha;
        }
    }

    const user = new usuario("Rômulo",32,"rua cinco de maio","romulo@gmail.com","M", "assuncao",123456); 
    
    console.log(user);

    console.log(`nomeLogin`);


    const jsonLogin = '{"nome": "Rômulo", "idade":32, "endereco":"rua cinco de maio", "email":"romulo@gamil.com","genero":"M","login":"assuncao","senha":123456}'

    const obj =JSON.parse(jsonLogin);

    obj.nome +=" Corrêa";
    obj.departamento = "administrativo"

    const jsonString = JSON.stringify(obj);
    console.log(jsonString);