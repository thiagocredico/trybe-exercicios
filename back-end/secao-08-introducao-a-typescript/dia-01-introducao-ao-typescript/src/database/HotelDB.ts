import { Hotel } from "../types/Hotel";
import { Reservation } from "../types/Reservation";
import { Room } from "../types/Room";

const hotel: Hotel = {
  name: 'Trybe Holiday',
  rooms: [
    { id: 1, apartment: 101, type: 'single', price: 199, isAvailable: true },
    { id: 2, apartment: 102, type: 'single', price: 199, isAvailable: true },
    { id: 3, apartment: 201, type: 'double', price: 299, isAvailable: true },
    { id: 4, apartment: 202, type: 'double', price: 299, isAvailable: false },
    { id: 5, apartment: 301, type: 'suite', price: 399, isAvailable: false },
    { id: 6, apartment: 302, type: 'suite', price: 399, isAvailable: true },
  ],
  reservations: [],
};

function getRooms(): Room[] {
  return hotel.rooms;
}

function updateRoom(updatedRoom: Room): void {
  const foundIndex = hotel.rooms.findIndex((currentRoom) => currentRoom.id === updatedRoom.id);
  hotel.rooms[foundIndex] = updatedRoom;
}

function getReservations(): Reservation[] {
  return hotel.reservations;
}

function insertReservation(reservation: Reservation): void {
  hotel.reservations.push(reservation);
}

export default {
  getRooms,
  getReservations,
  insertReservation,
  updateRoom,
};
