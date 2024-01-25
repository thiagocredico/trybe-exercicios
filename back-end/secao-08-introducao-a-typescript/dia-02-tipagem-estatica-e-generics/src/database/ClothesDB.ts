/* eslint-disable max-lines-per-function */

import { Clothes } from "../types/Clothes";

async function getAll(): Promise<Clothes[]> {
  return [
    { name: 'T-shirt', price: 20, size: 'M' },
    { name: 'Jeans', price: 50, size: '32' },
    { name: 'Dress', price: 80, size: 'S' },
    { name: 'Jacket', price: 100, size: 'L' },
    { name: 'Sweater', price: 60, size: 'M' },
    { name: 'Skirt', price: 40, size: 'S' },
    { name: 'Pants', price: 70, size: '30' },
    { name: 'Blouse', price: 35, size: 'M' },
    { name: 'Jumper', price: 65, size: 'L' },
    { name: 'Shirt', price: 25, size: 'S' },
    { name: 'Coat', price: 90, size: 'XL' },
    { name: 'Shorts', price: 30, size: 'M' },
    { name: 'Dress', price: 75, size: 'L' },
    { name: 'Jacket', price: 120, size: 'XL' },
    { name: 'Blazer', price: 80, size: 'M' },
    { name: 'Pants', price: 60, size: '32' },
    { name: 'Skirt', price: 50, size: 'M' },
    { name: 'T-shirt', price: 15, size: 'S' },
    { name: 'Jeans', price: 45, size: '30' },
    { name: 'Dress', price: 85, size: 'M' },
    { name: 'Jacket', price: 110, size: 'L' },
    { name: 'Sweater', price: 55, size: 'S' },
    { name: 'Blouse', price: 30, size: 'M' },
    { name: 'Pants', price: 50, size: '32' },
    { name: 'Jacket', price: 105, size: 'XL' },
    { name: 'Skirt', price: 45, size: 'S' },
    { name: 'Shirt', price: 20, size: 'M' },
    { name: 'Coat', price: 95, size: 'L' },
    { name: 'Shorts', price: 25, size: 'M' },
    { name: 'Dress', price: 70, size: 'L' },
    { name: 'Jacket', price: 115, size: 'XL' },
    { name: 'Blouse', price: 40, size: 'S' },
    { name: 'Pants', price: 65, size: '30' },
    { name: 'Sweater', price: 50, size: 'M' },
    { name: 'Jeans', price: 55, size: '32' },
    { name: 'Dress', price: 90, size: 'S' },
    { name: 'Jacket', price: 130, size: 'L' },
  ];
}

export default {
  getAll,
};
