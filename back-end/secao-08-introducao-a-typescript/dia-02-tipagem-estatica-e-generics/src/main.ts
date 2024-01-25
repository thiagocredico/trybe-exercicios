import BookDB from "./database/BookDB";
import ClothesDB from "./database/ClothesDB";
import { getProducts } from "./service/ProductService";
import { Book } from "./types/Book";
import { Clothes } from "./types/Clothes";

async function main() {
  const booksDb = await BookDB.getAll();
  const clothsDb = await ClothesDB.getAll();

  const books = await getProducts<Book>(booksDb, 1, 5);
  console.table(books.data);

  const cloths = await getProducts<Clothes>(clothsDb, 1, 5);
  console.table(cloths.data);

}

main();

  // SELECT * FROM products LIMIT 5 OFF SET 15
  // (page - 1) * pageLimit
  // pageLimit * page

  // page (1) = (1-1) * 5 // 1 - 1 = 0 * 5 = 0
  // page (2) = (2-1) * 5 // 2 - 1 = 1 * 5 = 5
  // page (3) = (3-1) * 5 // 3 - 1 = 2 * 5 = 10

  // pageLimit 5 * page // 5 * 2 = 10
  // pageLimit 5 * page // 5 * 3 = 15