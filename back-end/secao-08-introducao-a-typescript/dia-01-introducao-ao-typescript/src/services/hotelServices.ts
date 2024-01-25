import HotelDb from '../database/HotelDB';

export function getAvaliableRooms() {
  const rooms = HotelDb.getRooms();
  const avaliablesRooms = rooms.filter((room) => room.isAvailable);
  return avaliablesRooms;
}

export function reserveRoom(roomId: number, name: string, checkIn: Date, checkOut: Date) {
  const foundRoom = getAvaliableRooms() // [rooms]
    .find((room) => room.id === roomId && room.isAvailable === true);

  if (!foundRoom) {
    throw new Error('Quarto nao encontrado');
  }

  HotelDb.insertReservation({ guestName: name, room: foundRoom, checkIn, checkOut });

  HotelDb.updateRoom({
    ...foundRoom,
    isAvailable: false
  })
}