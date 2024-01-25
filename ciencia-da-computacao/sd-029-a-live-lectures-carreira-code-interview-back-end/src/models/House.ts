export default class House {
  id: number;
  city: string;
  street: string;
  number: number;
  uf: string;

  constructor() {
    this.id = 0;
    this.city = '';
    this.street = '';
    this.number = 0;
    this.uf = '';
  }
}