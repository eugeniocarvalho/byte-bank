import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'


const cliente1 = new Cliente();

cliente1.nome = 'Eugênio';
cliente1.cpf = '11122233344';

const cliente2 = new Cliente();

cliente2.nome = 'Joana';
cliente2.cpf = '22233344455';

const contaCorrenteEugenio = new ContaCorrente();

contaCorrenteEugenio.agencia = 1010;
contaCorrenteEugenio.cliente = cliente1;

contaCorrenteEugenio.depositar(650);

const conta2 = new ContaCorrente();

conta2.agencia = 1011;
conta2.cliente = cliente2;

contaCorrenteEugenio.transferir(230, conta2);
conta2.transferir(250, contaCorrenteEugenio);

console.log(contaCorrenteEugenio);
console.log(conta2);
