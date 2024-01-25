class Pessoa {
  private _name: string;
  private _email: string;
  constructor(name: string, email: string) {
    if (name.length < 3) throw new Error('Nome tem que ser maior 3 letras');
    if (!/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,3}/.test(email))
      throw new Error('Email invalido');
    this._name = name;
    this._email = email;
  }
  gastar(valor:number) {
    console.log(`Gastei  ${valor} reais `);
  }
}
export default Pessoa;
