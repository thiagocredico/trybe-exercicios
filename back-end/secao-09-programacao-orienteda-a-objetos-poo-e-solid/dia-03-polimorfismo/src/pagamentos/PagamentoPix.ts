import Conta from '../contas/Conta';
import Pagamentos from './Pagamentos';

class PagamentoPix extends Pagamentos {
  private _chavePix: string;
  constructor(chave: string, conta: Conta, valor: number, descricao: string) {
    super(conta, valor, descricao);
    this._chavePix = chave;
  }
  protected gerarCodigo(): string {
    return `${this._chavePix}-${this.descricao}`;
  }
  pagar(): void {
    console.log('Pagando via PIX');
    console.log('Saldo conta:', this.conta.saldo);
    console.log('Descrição:', this.descricao);
    console.log('Valor:', this.valor);
    console.log('Codigo da transação: ', this.gerarCodigo());
    this.conta.debito(this.valor);
    console.log('Saldo restante:', this.conta.saldo);
  }
}

export default PagamentoPix;
