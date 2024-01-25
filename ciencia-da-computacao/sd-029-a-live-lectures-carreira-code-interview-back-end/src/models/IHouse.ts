export interface IHouse {
  city: string;
  street: string;
  number: number;
  uf: string;
}

export interface IHouseDTO extends IHouse {
  id?: number;
}