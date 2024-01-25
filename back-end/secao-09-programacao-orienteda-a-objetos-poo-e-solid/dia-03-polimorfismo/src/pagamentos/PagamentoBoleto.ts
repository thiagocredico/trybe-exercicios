import Conta from '../contas/Conta';
import IPrestacao from '../interfaces/IPrestacoes';
import Pagamentos from './Pagamentos';

class PagamentoBoleto extends Pagamentos {
  private _vencimento: Date;
  private _multa: number;
  private _prestacoes: IPrestacao[];

  constructor(
    conta: Conta,
    valor: number,
    descricao: string,
    vencimento: Date,
  ) {
    super(conta, valor, descricao);
    this._vencimento = vencimento;
    this._multa = 0.2;
    this._prestacoes = [];
  }
  set vencimento(d: Date) {
    this._vencimento = d;
  }
  get vencimento() {
    return this._vencimento;
  }
  get multa() {
    return this._multa;
  }
  get prestacoes() {
    return this._prestacoes;
  }

  protected gerarCodigo(): string {
    const codigo = super.gerarCodigo();

    return `${codigo}-${this._vencimento.getTime()}`;
  }
  private estaVencido() {
    return this._vencimento.getTime() < new Date().getTime();
  }
  public pagar() {
    console.log('Pagando via Boleto');
    console.log('Saldo conta:', this.conta.saldo);
    console.log('Dados para pagamento boleto:');
    console.log('Descrição:', this.descricao);
    console.log('Vencimento:', this.vencimento);
    console.log('Multa:', this.multa);
    console.log('Codigo da transação: ', this.gerarCodigo());
    if (this.estaVencido()) {
      this.valor += this.valor * this._multa;
    }
    this.conta.debito(this.valor);
    console.log('Saldo restante:', this.conta.saldo);
  }
}

export default PagamentoBoleto;
