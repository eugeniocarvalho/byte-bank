class Cliente {
  cpf;
  nome;
}

class ContaCorrente {
  agencia;
  _saldo = 0;

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
    }

    this._saldo += valor;
  }
}


const cliente1 = new Cliente();

cliente1.nome = 'Eugênio';
cliente1.cpf = '11122233344';

const contaCorrenteEugenio = new ContaCorrente();

contaCorrenteEugenio.agencia = 1010;

contaCorrenteEugenio.depositar(100);
contaCorrenteEugenio.depositar(239.3);
contaCorrenteEugenio.depositar(-2);

const valorSacado = contaCorrenteEugenio.sacar(39.3);

console.log(valorSacado);

console.log(contaCorrenteEugenio)