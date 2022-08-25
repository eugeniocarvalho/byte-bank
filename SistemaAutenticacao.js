/*
 Ser autenticavel significa ter a propriedade 'senha'
*/

export class SistemaAutenticacao {
  static login(autenticavel, senha) {
    if (SistemaAutenticacao.ehAutenticavel(autenticavel))
      return autenticavel.autenticar(senha);
    
    return false;
  }

  static ehAutenticavel(autenticavel) {
    //retorna true se há a propriedade autenticar e se é uma função
    return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
  }
}
