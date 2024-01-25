// Antes da refatoração
let total = 0;
total += valor1 * quantidade;
total += valor2 * quantidade;

// Após a refatoração
let total1 = valor1 * quantidade;
let total2 = valor2 * quantidade;