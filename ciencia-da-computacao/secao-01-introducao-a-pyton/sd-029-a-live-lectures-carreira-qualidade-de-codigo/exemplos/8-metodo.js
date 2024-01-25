// Antes da refatoração
function fecharPedido(precoUnitario, quantidade) {
  return precoUnitario * quantidade;
}

// Após a refatoração
function fecharPedido(produto) {
  return produto.calcularTotal();
}