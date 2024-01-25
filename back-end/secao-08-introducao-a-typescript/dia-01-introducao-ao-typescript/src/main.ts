import { getAvaliableRooms, reserveRoom } from "./services/hotelServices";

const avaliableRooms = getAvaliableRooms();

const username = 'Lari';
const checkIn = new Date('2023/08/07');
const checkOut = new Date('2023/09/07');

console.table(avaliableRooms)
reserveRoom(10, username, checkIn, checkOut);

const avaliableRooms2 = getAvaliableRooms();
console.table(avaliableRooms2)