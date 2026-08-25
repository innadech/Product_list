const elAddTaskButton = document.querySelector('#addTaskButton')
const elTaskInput = document.querySelector('#taskInput')

function renderProductsListAll(products) {
  const elUl = document.querySelector('#taskList')
  elUl.innerHTML = ''
  products.forEach(product => {
    const elLi = generateLi(product)
    elUl.appendChild(elLi)
  })
}

function onClickAddTaskButton() {
  let elTaskInput = document.querySelector('#taskInput')
  let a = elTaskInput.value
  if (a.length >= 3) {
    handleProductsAdd(a) // Вызываем контроллер добавления
    elTaskInput.value = '' // Исправили очистку инпута
  }
}

function onClickDeleteButton(e) {
  e.stopPropagation() // чтобы клик не уходил на li
  // console.log(e.target.previousElementSibling.textContent)
  // console.log(e.target.parentElement)
  // e.target.parentElement.remove()

  const product = e.target.previousElementSibling.textContent
  handleProductsDelete(product)
}

// Редактирование при нажатии на саму строчку li
function onClickEditProduct(e) {
  const oldProduct = e.target.textContent
  const newProduct = prompt('Edit product:', oldProduct)
  if (newProduct !== null && newProduct.trim() !== '') {
    handleProductsEdit(oldProduct, newProduct.trim())
  }
}

function generateLi(product) {
  const elLi = document.createElement('li')
  const elInput = document.createElement('input')
  const elSpan = document.createElement('span')
  const elButtonDelete = document.createElement('button')

  elInput.setAttribute('type', 'checkbox')
  elInput.setAttribute('class', 'checkbox')
  elSpan.setAttribute('class', 'task-text')
  elInput.onclick = checkboxColor
  elButtonDelete.setAttribute('class', 'deleteButton')

  elSpan.innerHTML = product
  elButtonDelete.innerHTML = 'Delete'

  elButtonDelete.onclick = onClickDeleteButton

  elLi.onclick = onClickEditProduct

  elLi.appendChild(elInput)
  elLi.appendChild(elSpan)
  elLi.appendChild(elButtonDelete)

  return elLi
}

elAddTaskButton.onclick = onClickAddTaskButton
