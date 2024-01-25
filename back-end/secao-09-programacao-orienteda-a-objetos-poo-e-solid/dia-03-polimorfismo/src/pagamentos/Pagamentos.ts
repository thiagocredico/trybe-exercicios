import crypto from 'node:crypto';
import Conta from '../contas/Conta';

abstract class Pagamentos {
  private _conta: Conta;
  private _valor: number;
  private _descricao: string;
  private static _minValor: number = 0;
  private static contandor: number = 0;

  constructor(conta: Conta, valor: number, descricao?: string) {
    if (valor < Pagamentos._minValor) {
      throw new Error('Valor negativo é inválido');
    }
    this._conta = conta;
    this._valor = valor;
    this._descricao = descricao || '';
    Pagamentos.contandor += 1;
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
  protected gerarCodigo() {
    const timestamp = new Date().getTime();
    const uuid = crypto.randomUUID();
    const descricao = this._descricao;

    return `${timestamp}-${uuid}-${descricao}`;
  }
  public static quantidadePagamentos(): void {
    console.log(`Quantidade de pagamentos efetuados: ${Pagamentos.contandor}`);
  }
}

export default Pagamentos;
