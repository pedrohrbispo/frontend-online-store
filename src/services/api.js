export async function getCategories() {
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const categoriesPromisse = await fetch(endpoint);
  const categoriesJson = categoriesPromisse.json();
  return categoriesJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const productsPromisse = await fetch(endpoint);
  const productsJson = productsPromisse.json();
  return productsJson;
}
