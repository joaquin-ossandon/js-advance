import { getProducts } from "./getProducts.js";

export const renderProducts = async () => {
    const products = await getProducts()
    let productsHTML = ''

    products.forEach((product) => {
        productsHTML += `
        <div class="col">
          <div class="card">
            <img
              src="https://dummyimage.com/600x400/000/fff&text=${product.title}"
              class="card-img-top"
              alt="${product.title}"
            />
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">
                ${product.description}
              </p>
              <p class=''>
                $${product.price}
              </p>
              <a href="./pages/product.html?slug=${product.slug}" class="btn btn-primary">Ir al producto</a>
            </div>
          </div>
        </div>
        `
    })

    const productsContainer = document.querySelector('#products')
    productsContainer.innerHTML = productsHTML
}