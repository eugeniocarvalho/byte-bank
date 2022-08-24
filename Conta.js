  export class Conta {
    constructor(agencia, cliente, saldoInicial) {
      this._agencia = agencia
      this._cliente = cliente;
      this._saldo = saldoInicial;
    }

    get saldo() {
      return this._saldo;
    }
    
    sacar(valor) {
      if (this._saldo >= valor) {
        this._saldo -= valor;
  
        return valor;
      }
  
      return 0;
    }
  
    depositar(valor) {
      if (valor <= 0) {
        return 0;
      }
  
      this._saldo += valor;
    }
  
    transferir (valor, conta) {
      const valorSacado = this.sacar(valor);
      conta.depositar(valorSacado);
    }
  }