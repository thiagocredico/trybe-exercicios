import Conta from './Conta';

abstract class Pagamentos {
  private _conta: Conta;
  private _valor: number;
  private _descricao: string;

  constructor(conta: Conta, valor: number, descricao?: string) {
    this._conta = conta;
    this._valor = valor;
    this._descricao = descricao || '';
  }
  abstract pagar(): void;
  set valor(s: number) {
    this._valor = s;
  }
  get valor() {
    return this._valor;
  }
  get conta(): Conta {
    return this._conta;
  }

  set descricao(d: string) {
    this._descricao = d;
  }

  get descricao() {
    return this._descricao;
  }
  // public pedirEmprestimo(){
  //   console.log('Preciso de grana!!!')
  // }
}

export default Pagamentos;
