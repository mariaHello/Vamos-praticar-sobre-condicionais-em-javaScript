let preco = 75;
if (preco < 20) {
  console.log("Produto barato");
} else if (preco >= 20 && preco < 50) {
  console.log("Produto de preço médio");
} else if (preco >= 50 && preco < 100) {
  console.log("Produto caro");
} else {
  console.log("Produto de luxo");
}
