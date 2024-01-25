import Conta from './contas/Conta';
import PagamentoBoleto from './pagamentos/PagamentoBoleto';
import PagamentoCartao from './pagamentos/PagamentoCartao';
import PagamentoPix from './pagamentos/PagamentoPix';
import Pagamentos from './pagamentos/Pagamentos';
import Pessoa from './pessoas/Pessoa';

const leo = new Pessoa('leonardo', 'leo@soudev.com');

const contaPessoaA = new Conta(200, leo);

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
Pagamentos.quantidadePagamentos();

console.log('----------\n');

const pagamentoCartao = new PagamentoCartao(contaPessoaA, 1, 'Pera na fera');
pagamentoCartao.pagar();
Pagamentos.quantidadePagamentos();

console.log('----------\n');

const pagamentoPix = new PagamentoPix(
  `chave-pix`,
  contaPessoaA,
  10,
  'test poly',
);

pagamentoPix.pagar();
Pagamentos.quantidadePagamentos();
