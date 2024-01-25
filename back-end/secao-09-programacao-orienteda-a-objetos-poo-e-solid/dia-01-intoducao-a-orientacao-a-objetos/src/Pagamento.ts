import Conta from './Conta';
import IPrestacao from './IPrestacoes';

class Pagamento {
  private _conta: Conta;
  private _valor: number;
  private _tipo: string;
  private _vencimento: Date;
  private _descricao: string;
  private _multa: number;
  private _prestacoes: IPrestacao[];
  constructor(
    conta: Conta,
    valor: number,
    tipo: string,
    vencimento: Date,
    descricao?: string,
    prestacoes?: IPrestacao[],
  ) {
    this._conta = conta;
    this._valor = valor;
    this._tipo = tipo;
    this._vencimento = vencimento;
    this._descricao = descricao || '';
    this._multa = 0.2;
    if (prestacoes && prestacoes.length > 10) {
      throw new Error('Parcelamento maximo de 10x');
    }
    this._prestacoes = prestacoes || [];
  }

  get valor() {
    return this._valor;
  }
  get tipo() {
    return this._tipo;
  }

  get vencimento() {
    return this._vencimento;
  }

  get descricao() {
    return this._descricao;
  }

  get multa() {
    return this._multa;
  }

  get prestacao() {
    return this._prestacoes;
  }

  get conta() {
    return this._conta;
  }
  public pagar(){
    if(this._tipo === 'boleto') return this.pagarBoleto()
    if(this._tipo === 'cartao') return this.pagarCartao()
    if(this._tipo === 'cheque') return this.pagarCheque()
    throw new Error('Método de pagamento não conhecido')
  }
  private estaVencido () {
    return this._vencimento.getTime() < new Date().getTime()
  }
  private pagarBoleto(){
    console.log('Pagando via Boleto');
    console.log('Saldo conta:', this.conta.saldo);
    console.log('Dados para pagamento boleto:');
    console.log('Descrição:', this.descricao);
    console.log('Vencimento:', this.vencimento);
    console.log('Multa:', this.multa);
    console.log('Processando pagamento ...');
    if (this.estaVencido()) {
      this._valor += (this._valor * this._multa);
    }
    this.conta.debito(this.valor);
    console.log('Saldo restante:', this.conta.saldo);
  }
  private pagarCartao(){
    console.log('Pagando via Cartão');
    console.log('Saldo conta:', this.conta.saldo);
    console.log('Descrição:', this.descricao);
    console.log('Valor:', this.valor);
    console.log('Processando pagamento ...');
    this.conta.debito(this.valor);
    console.log('Saldo restante:', this.conta.saldo);
  }
  private pagarCheque(){
    console.log('Pagando via Cheque');
    console.log('Saldo conta:', this.conta.saldo);
    console.log('Descrição:', this.descricao);
    console.log('Valor:', this.valor);
    console.log('Processando pagamento ...');
    this.conta.debito(this.valor);
    console.log('Saldo restante:', this.conta.saldo);
  }
}

export default Pagamento;
