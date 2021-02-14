export async function getCategories() {
  const enpoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(enpoint);
  return response.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query = '') {
  const enpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(enpoint);
  return response.json();
}
