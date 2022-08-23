import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  agencia;
  
  //Propriedades privadas
  _cliente;
  _saldo = 0;

  constructor(cliente, agencia) {
    this.cliente = cliente;
    this.agencia = agencia;
  }

  set cliente(novoValor) {
    if (novoValor instanceof Cliente)
      this._cliente = novoValor;
  }

  get cliente() {
    return this._cliente;
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
