// Antes da refatoração
function calcularPrecoTotal(itens) {
  let total = 0;
  for (const item of itens) {
      total += item.quantidade * item.precoUnitario;
  }
  return total;
}

// Após a refatoração
function calcularPrecoTotal(itens) {
  return itens.reduce((total, item) => total + calcularSubtotal(item), 0);
}

function calcularSubtotal(item) {
  return item.quantidade * item.precoUnitario;
}
