// T, V, U, K 
function getPage<ProductType>(products: ProductType[], page: number, pageLimit: number): ProductType[] {
  const pageStart = (page - 1) * pageLimit;
  const pageEnd = page * pageLimit;
  return products.slice(pageStart, pageEnd);
}

function getTotalPages<Type>(products: Type[], pageLimit: number) {
  return Math.ceil(products.length / pageLimit); // 50 / 10 = 5
}

export {
  getPage,
  getTotalPages
};
