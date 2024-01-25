import { Eletronic } from "../types/Eletronic";

/* eslint-disable max-lines-per-function */
async function getAll(): Promise<Eletronic[]> {
  return [
    { name: 'Macbook Pro', price: 2500, brand: 'Apple' },
    { name: 'Surface Laptop', price: 1700, brand: 'Microsoft' },
    { name: 'ThinkPad X1 Carbon', price: 1500, brand: 'Lenovo' },
    { name: 'Chromebook', price: 500, brand: 'Google' },
    { name: 'Gaming Laptop', price: 2000, brand: 'Asus' },
    { name: 'Smartphone', price: 1000, brand: 'Samsung' },
    { name: 'iPhone', price: 1200, brand: 'Apple' },
    { name: 'Pixel', price: 800, brand: 'Google' },
    { name: 'Galaxy Note', price: 900, brand: 'Samsung' },
    { name: 'OnePlus', price: 700, brand: 'OnePlus' },
    { name: 'iPad', price: 600, brand: 'Apple' },
    { name: 'Galaxy Tab', price: 400, brand: 'Samsung' },
    { name: 'Surface Pro', price: 1200, brand: 'Microsoft' },
    { name: 'Fire Tablet', price: 100, brand: 'Amazon' },
    { name: 'Kindle', price: 150, brand: 'Amazon' },
    { name: 'Fitbit', price: 100, brand: 'Fitbit' },
    { name: 'Apple Watch', price: 400, brand: 'Apple' },
    { name: 'Samsung Watch', price: 300, brand: 'Samsung' },
    { name: 'Garmin Watch', price: 200, brand: 'Garmin' },
    { name: 'Bose Headphones', price: 300, brand: 'Bose' },
    { name: 'Beats Headphones', price: 200, brand: 'Beats' },
    { name: 'Sony Headphones', price: 150, brand: 'Sony' },
    { name: 'JBL Headphones', price: 100, brand: 'JBL' },
    { name: 'Dell Desktop', price: 800, brand: 'Dell' },
    { name: 'HP Desktop', price: 700, brand: 'HP' },
    { name: 'iMac', price: 1500, brand: 'Apple' },
    { name: 'Surface Studio', price: 2000, brand: 'Microsoft' },
    { name: 'Asus Desktop', price: 1000, brand: 'Asus' },
    { name: 'LG Monitor', price: 300, brand: 'LG' },
    { name: 'Dell Monitor', price: 250, brand: 'Dell' },
    { name: 'Samsung Monitor', price: 200, brand: 'Samsung' },
    { name: 'Acer Monitor', price: 150, brand: 'Acer' },
    { name: 'Logitech Mouse', price: 50, brand: 'Logitech' },
    { name: 'Microsoft Mouse', price: 40, brand: 'Microsoft' },
    { name: 'Apple Magic Mouse', price: 80, brand: 'Apple' },
    { name: 'Razer Mouse', price: 60, brand: 'Razer' },
    { name: 'Logitech Keyboard', price: 70, brand: 'Logitech' },
    { name: 'Microsoft Keyboard', price: 60, brand: 'Microsoft' },
  ];
}

export default {
  getAll,
};