import { Cliente } from './Cliente.js'
import { Gerente } from './Funcionario/Gerente.js'
import { Diretor } from './Funcionario/Diretor.js'
import { SistemaAutenticacao } from './SistemaAutenticacao.js';


const diretor = new Diretor(12345678900, 'Eugênio', 10000);
const gerente = new Gerente(98765432101, 'Maria', 8000);
const cliente1 = new Cliente(2233311190, 'João', 'minhasenha')

diretor.cadastrarSenha("123456789");
gerente.cadastrarSenha("senhagerente");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123456789');
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "senhagerente");
const clienteEstaLogado = SistemaAutenticacao.login(cliente1, 'minhasenha');

console.log(diretorEstaLogado);
console.log(gerenteEstaLogado);
console.log(clienteEstaLogado);
