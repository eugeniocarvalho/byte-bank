export class ContaCorrente {
  agencia;
  cliente;

  //Propriedades privadas
  _saldo = 0;

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
