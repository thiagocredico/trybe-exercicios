import Pessoa from '../pessoas/Pessoa';

class Conta {
  private _saldo: number;
  private _pessoa: Pessoa;
  constructor(s: number, pessoa: Pessoa) {
    this._saldo = s;
    this._pessoa = pessoa;
  }
  get saldo() {
    return this._saldo;
  }
  // set saldo(s: number) {
  //   this._saldo = s;
  // }
  public debito(valor: number) {
    if (this._saldo < valor) {
      throw new Error('Saldo insuficiente');
    }
    this._saldo = this._saldo - valor;
    this._pessoa.gastar(valor);
  }
}

export default Conta;
