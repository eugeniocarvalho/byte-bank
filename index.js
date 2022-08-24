import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'
import { ContaPoupanca } from './ContaPoupanca.js';
import { ContaSalario } from './ContaSalario.js';


const cliente1 = new Cliente('11122233344', 'Eugênio');
const contaCorrenteEugenio = new ContaCorrente(1010, cliente1, 0);
const contaPoupanca = new ContaPoupanca(1010, cliente1, contaCorrenteEugenio.saldo)
const contaSalario = new ContaSalario(cliente1);

contaSalario.depositar(100);
contaSalario.sacar(80);
console.log(contaSalario);
 