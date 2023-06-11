function Conta(numeroConta, agencia, cpfTitular, saldo){
    this.numeroConta = numeroConta,
    this.agencia = agencia,
    this.cpfTitular = cpfTitular,
    this.saldo = saldo,

    this.depositar = function(valor){
        this.saldo += valor;
        return 'Saldo atual: R$${this.saldo}';
    },

    this.sacar = function(valor){
        if(this.saldo < valor){
            return 'valor: R$${valor} é maior que o saldo disponível';
        }
        else{
            this.saldo -= valor;
            return 'Saldo atual: ${this.}, valor sacado:R$${valor}';
        }
    }
}

module.exports = {
    Conta
}