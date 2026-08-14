// renderTodoApp()

function renderProductsApp() {
  let products = getProducts()
  renderProductsListAll(products) // Передаем весь массив в ваш view
}

function handleProductsAdd(product) {
  addProduct(product)
  renderProductsApp()
}

function handleProductsDelete(product) {
  deleteProduct(product)
  renderProductsApp()
}

function handleProductsEdit(oldProduct, newProduct) {
  // const newText = prompt('Edit product:', newProduct)

  // if (newText !== null && newText.trim() !== '') {
  //   editProduct(oldProduct, newText.trim())
  //   renderProductsApp()
  // }
  editProduct(oldProduct, newProduct)
  renderProductsApp()
}
