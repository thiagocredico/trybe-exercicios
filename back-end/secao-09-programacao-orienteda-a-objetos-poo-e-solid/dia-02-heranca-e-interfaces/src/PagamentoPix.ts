import Conta from './Conta';
import Pagamentos from './Pagamentos';

class PagamentoPix extends Pagamentos {
  constructor(conta: Conta, valor: number, descricao: string) {
    super(conta, valor, descricao);
  }
  pagar(): void {
    console.log('Pagando via PIX');
    console.log('Saldo conta:', this.conta.saldo);
    console.log('Descrição:', this.descricao);
    console.log('Valor:', this.valor);
    console.log('Processando pagamento ...');
    this.conta.debito(this.valor);
    console.log('Saldo restante:', this.conta.saldo);
  }
}

export default PagamentoPix;
