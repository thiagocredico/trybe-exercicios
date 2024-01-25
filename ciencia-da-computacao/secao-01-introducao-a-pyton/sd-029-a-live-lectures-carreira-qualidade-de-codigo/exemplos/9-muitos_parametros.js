// Antes da refatoração
function criarPedido(cliente, produtos, dataEntrega, valorTotal) {
  // ...
}

// Após a refatoração
function criarPedido(opcoes) {
  const { cliente, produtos, dataEntrega, valorTotal } = opcoes;
  // ...
}