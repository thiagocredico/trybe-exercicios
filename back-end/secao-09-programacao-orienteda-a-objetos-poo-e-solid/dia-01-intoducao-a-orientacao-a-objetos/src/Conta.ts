class Conta {
  private _saldo: number;
  constructor(s: number) {
    this._saldo = s;
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
  }
}

export default Conta;
