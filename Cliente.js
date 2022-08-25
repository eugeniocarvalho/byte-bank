export class Cliente {

  constructor(cpf, nome, senha) {
    this._cpf = cpf;
    this.nome = nome;
    this._senha = senha;
  }

  get cpf() {
    return this._cpf;
  }

  autenticar(senha) {
    return this._senha == senha;
  }
}
