import Conta from './Conta';
import PagamentoBoleto from './PagamentoBoleto';
import PagamentoCartao from './PagamentoCartao';


const contaPessoaA = new Conta(200);

const amanha = new Date();
amanha.setDate(amanha.getDate() + 1);

const ontem = new Date();
ontem.setDate(ontem.getDate() - 1);

console.log(contaPessoaA.saldo);

const pagamentoBoleto = new PagamentoBoleto(
  contaPessoaA,
  100,
  'Energia eletrica',
  amanha,
);
pagamentoBoleto.pagar();

console.log('Valor pago', pagamentoBoleto.valor);

const pagamentoCartao = new PagamentoCartao(contaPessoaA, 1, 'Pera na fera');

pagamentoCartao.pagar();

// pagamentoCartao.pedirEmprestimo()