// Classe abstrata
export class Conta {
  constructor(agencia, cliente, saldoInicial) {
    if (this.constructor == Conta)
      throw new Error('Você não deveria instanciar um objeto do tipo conta diretamente. É uma classe abstrata');

    this._agencia = agencia
    this._cliente = cliente;
    this._saldo = saldoInicial;

  }

  get saldo() {
    return this._saldo;
  }

  //Método abstrato, isso me obriga a implementar em cada classe que herda essa classe
  sacar() {
    throw new Error('O método sacar da conta é abstrato');
  }

  _sacar(valor, taxa) {
    const valorSacado = taxa * valor
    
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;

      return valorSacado;
    }

    return 0;
  }

  depositar(valor) {
    if (valor <= 0) {
      return 0;
    }

    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}