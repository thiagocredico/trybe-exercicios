import BookDB from '../database/BookDB';
import ClothesDB from '../database/ClothesDB';
import ElectronicDB from '../database/ElectronicDB';
import { Book } from '../types/Book';
import { Clothes } from '../types/Clothes';
import { Eletronic } from '../types/Eletronic';
import { Paginated } from '../types/Paginated';
import { getPage, getTotalPages } from './PaginationService';

async function getBooks(page: number, pageLimit: number): Promise<Paginated<Book>> {
  // page 1
  // pageLimit 5
  const products = await BookDB.getAll(); // 50 total

  const filteredProducts = getPage<Book>(products, page, pageLimit); // x 
  const totalPagesOfProducts = getTotalPages<Book>(products, pageLimit) // 50 / 5 = 10
  const hasMorePage = totalPagesOfProducts > page;
  return {
    data: filteredProducts,
    hasMorePage
  }
}

async function getEletronics(page: number, pageLimit: number): Promise<Paginated<Eletronic>> {
  const products = await ElectronicDB.getAll();
  const filteredProducts = getPage<Eletronic>(products, page, pageLimit);
  const totalPagesOfProducts = getTotalPages<Eletronic>(products, pageLimit) // 50 / 5 = 10
  const hasMorePage = totalPagesOfProducts > page;
  return {
    data: filteredProducts,
    hasMorePage
  }
}

async function getCloths(page: number, pageLimit: number): Promise<Paginated<Clothes>> {
  const products = await ClothesDB.getAll();
  const filteredProducts = getPage<Clothes>(products, page, pageLimit);
  const totalPagesOfProducts = getTotalPages<Clothes>(products, pageLimit) // 50 / 5 = 10
  const hasMorePage = totalPagesOfProducts > page;
  return {
    data: filteredProducts,
    hasMorePage
  }
}

async function getProducts<ProductType>(products: ProductType[], page: number, pageLimit: number): Promise<Paginated<ProductType>> {
  const filteredProducts = getPage<ProductType>(products, page, pageLimit);
  const totalPagesOfProducts = getTotalPages<ProductType>(products, pageLimit);
  const hasMorePage = totalPagesOfProducts > page;
  return {
    data: filteredProducts,
    hasMorePage
  }
}

export {
  getBooks, getCloths, getEletronics,
  getProducts
};

