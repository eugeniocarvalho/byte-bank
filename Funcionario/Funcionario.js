export class Funcionario {
  constructor(cpf, nome, salario) {
    this._bonificacao = 1;
    this._cpf = cpf;
    this._nome = nome;
    this._salario = salario;
    this._senha;
  }

  cadastrarSenha(senha) {
    this._senha = senha;
  }

  autenticar(senha) {
    return this._senha == senha;
  }
}
