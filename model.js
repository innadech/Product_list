let products = []

function getProducts() {
  return products
}

function addProduct(product) {
  product = product.trim()
  if (product === '') return
  if (!products.includes(product)) {
    products.push(product)
  }
}

function editProduct(oldProduct, newProduct) {
  products = products.map(p => (p === oldProduct ? newProduct : p))
}

function deleteProduct(product) {
  products = products.filter(p => p !== product)
}

// // //

// console.log(products)

// addProduct('    ')
// console.log(products)

// addProduct('banana')
// console.log(products)

// addProduct('apple')
// console.log(products)

// addProduct('tomato')
// console.log(products)

// editProduct('apple', 'orange')
// console.log(products)

// deleteProduct('apple')
// console.log(products)

// addProduct('apple')
// console.log(products)
