let products = []

function getProducts() {
  return products
}

function addProduct(product) {
  product = product.trim()
  if (product.length < 3) return
  if (product === '') return
  if (!products.includes(product)) {
    products.push(product)
  }
}

function editProduct(oldProduct, newProduct) {
  oldProduct = oldProduct.trim()
  newProduct = newProduct.trim()
  if (newProduct === '') return
  products = products.map(p => (p === oldProduct ? newProduct : p))
}

function deleteProduct(product) {
  product = product.trim()
  products = products.filter(p => p !== product)
}

// // //

console.log(products)

addProduct('    ')
console.log(products)

addProduct('banana')
console.log(products)

addProduct('apple')
console.log(products)

addProduct('tomato')
console.log(products)

editProduct(' apple ', ' orange ')
console.log(products)

deleteProduct(' apple ')
console.log(products)

addProduct('apple')
console.log(products)
