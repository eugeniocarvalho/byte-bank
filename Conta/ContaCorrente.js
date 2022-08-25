import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
  static numeroDeContas = 0;

  constructor(agencia, cliente) {
    super(agencia, cliente, 0);

    ContaCorrente.numeroDeContas++;
  }

  //sobrescrevendo o comportamento sacar da classe herdada
  sacar(valor) {
    let taxa = 1.1;
    
    return this._sacar(valor, taxa);
  }
}
