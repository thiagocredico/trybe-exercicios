/* eslint-disable sonarjs/no-duplicate-string */

import { Book } from '../types/Book';

/* eslint-disable max-lines-per-function */
async function getAll(): Promise<Book[]> {
  return [
    { name: 'The Lord of the Rings', price: 25, author: 'J.R.R. Tolkien' },
    { name: 'Harry Potter and the Philosopher\'s Stone', price: 20, author: 'J.K. Rowling' },
    { name: 'The Hitchhiker\'s Guide to the Galaxy', price: 18, author: 'Douglas Adams' },
    { name: 'The Chronicles of Narnia', price: 15, author: 'C.S. Lewis' },
    { name: 'The Hunger Games', price: 12, author: 'Suzanne Collins' },
    
    { name: 'The Hobbit', price: 22, author: 'J.R.R. Tolkien' },
    { name: 'To Kill a Mockingbird', price: 14, author: 'Harper Lee' },
    { name: 'The Great Gatsby', price: 16, author: 'F. Scott Fitzgerald' },
    { name: 'The Da Vinci Code', price: 10, author: 'Dan Brown' },
    { name: 'The Alchemist', price: 8, author: 'Paulo Coelho' },
    { name: 'The Picture of Dorian Gray', price: 9, author: 'Oscar Wilde' },
    { name: 'Dracula', price: 12, author: 'Bram Stoker' },
    { name: 'Frankenstein', price: 11, author: 'Mary Shelley' },
    { name: 'Jane Eyre', price: 13, author: 'Charlotte Bronte' },
    { name: 'Wuthering Heights', price: 14, author: 'Emily Bronte' },
    { name: 'The Adventures of Sherlock Holmes', price: 10, author: 'Arthur Conan Doyle' },
    { name: 'The War of the Worlds', price: 17, author: 'H.G. Wells' },
    { name: 'The Time Machine', price: 9, author: 'H.G. Wells' },
    { name: 'The Invisible Man', price: 8, author: 'H.G. Wells' },
    { name: 'The Call of the Wild', price: 7, author: 'Jack London' },
    { name: 'White Fang', price: 8, author: 'Jack London' },
    { name: 'The Adventures of Tom Sawyer', price: 11, author: 'Mark Twain' },
    { name: 'The Adventures of Huckleberry Finn', price: 12, author: 'Mark Twain' },
    { name: 'The Prince', price: 6, author: 'Niccolo Machiavelli' },
    { name: 'The Republic', price: 10, author: 'Plato' },
    { name: 'The Divine Comedy', price: 15, author: 'Dante Alighieri' },
    { name: 'The Canterbury Tales', price: 11, author: 'Geoffrey Chaucer' },
    { name: 'The Iliad', price: 12, author: 'Homer' },
    { name: 'The Odyssey', price: 13, author: 'Homer' },
    { name: 'Moby-Dick', price: 16, author: 'Herman Melville' },
    { name: 'The Adventures of Pinocchio', price: 7, author: 'Carlo Collodi' },
    { name: 'Alice\'s Adventures in Wonderland', price: 9, author: 'Lewis Carroll' },
  ];
}

export default {
  getAll
}