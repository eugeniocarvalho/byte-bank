import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'
import { ContaPoupanca } from './ContaPoupanca.js';


const cliente1 = new Cliente('11122233344', 'Eugênio');
const contaCorrenteEugenio = new ContaCorrente(1010, cliente1, 0);

contaCorrenteEugenio.depositar(650);
contaCorrenteEugenio.sacar(100);

const contaPoupanca = new ContaPoupanca(1010, cliente1, contaCorrenteEugenio.saldo)

contaPoupanca.sacar(30)

console.log(contaCorrenteEugenio);
console.log(contaPoupanca);
 