import { Room } from "./Room"

export type Reservation = {
  guestName: string,
  room: Room,
  checkIn: Date,
  checkOut: Date
}

// Cada reserva 
// terá: nome da pessoa hóspede, 
// quarto que foi reservado, data de check -in e data de check - out.