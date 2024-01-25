export type Room = {
  id: number,
  apartment: number,
  type: 'single' | 'double' | 'suite'
  price: number,
  isAvailable: boolean
}

// Cada quarto terá: 
// id, número do apartamento, tipo(simples / duplo / suite), preço e disponibilidade.
