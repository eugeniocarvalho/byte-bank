import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'


const cliente1 = new Cliente('Eugênio', '11122233344');

// const cliente2 = new Cliente();

// cliente2.nome = 'Joana';
// cliente2.cpf = '22233344455';

const contaCorrenteEugenio = new ContaCorrente(cliente1, 1010);

contaCorrenteEugenio.depositar(650);

const cliente2 = new Cliente('Joana', '22233344455');

const conta2 = new ContaCorrente(cliente2, 1011);

// conta2.cliente.nome = 'Joana';
// conta2.cliente.cpf = '22233344455';

contaCorrenteEugenio.transferir(230, conta2);
conta2.transferir(250, contaCorrenteEugenio);

console.log(ContaCorrente.numeroDeContas);
