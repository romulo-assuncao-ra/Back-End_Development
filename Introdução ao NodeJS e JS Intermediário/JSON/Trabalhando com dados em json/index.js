const jsonEntrada = '{"nome": "Rômulo", "idade":25, "professor": true, "turmas":[10, 12, 34, 42], "endereco":{"rua": "cinco de setembro", "numero": 410, "bairro": "japiim", "cep": "123.123-72"}}'

const obj = JSON.parse(jsonEntrada);

//console.log (obj);

obj.turmas.map(function(valor, posicao){
    console.log(`posicao: ${posicao}, valor:${valor}`);
})

obj.nome += " Orabama";
obj.salario = 1000;

//console.log (obj.nome);
//console.log (obj.salario);

//console.log(obj);

const jsonString = JSON.stringify(obj);
console.log(jsonString);


