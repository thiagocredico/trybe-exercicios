import Conta from './Conta';
import Pagamento from './Pagamento';

const contaPessoaA = new Conta(100);

const amanha = new Date();
amanha.setDate(amanha.getDate() + 1);

const ontem = new Date();
ontem.setDate(ontem.getDate() - 1);

console.log(contaPessoaA.saldo);

const pagamento = new Pagamento(contaPessoaA, 100, 'boleto', amanha);


pagamento.pagar();

console.log(contaPessoaA.saldo);