import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'
import { ContaPoupanca } from './ContaPoupanca.js';
import { Conta } from './Conta.js';


const cliente1 = new Cliente('11122233344', 'Eugênio');
const contaCorrenteEugenio = new Conta(1010, cliente1, 0);

contaCorrenteEugenio.depositar(650);
contaCorrenteEugenio.sacar(100);

const contaPoupanca = new Conta(1010, cliente1, contaCorrenteEugenio.saldo)

console.log(contaCorrenteEugenio);
console.log(contaPoupanca);
 