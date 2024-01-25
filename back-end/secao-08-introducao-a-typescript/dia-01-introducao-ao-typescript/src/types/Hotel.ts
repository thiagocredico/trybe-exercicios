import { Reservation } from "./Reservation"
import { Room } from "./Room"

export type Hotel = {
  name: string,
  rooms: Room[],
  reservations: Reservation[]
}

// Um hotel terá: nome, quartos e reservas.
