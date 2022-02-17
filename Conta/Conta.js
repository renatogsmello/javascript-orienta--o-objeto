export class Conta{
    
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor ==  Conta){
            throw new Error("Voce nao deveria instanciar esse objeto de tipo conta diretamente")
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        this._cliente;
    }

    get saldo(){
        this._saldo;
    }

    // Metodo Abstrato
    sacar(valor){

        throw new Error ("Esse é um metodo abstrato");
    
    }
    _sacar(valor, taxa){
        const valorSacado = valor * taxa;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }   
    }

    depositar(valor){
        if(valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}