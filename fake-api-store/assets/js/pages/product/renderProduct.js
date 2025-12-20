import { getProductBySlug } from "./getProductBySlug.js"

export const renderProduct = async (slug) => {
    const product = await getProductBySlug(slug)

    const productHTML = `
    <div class="col col-md-7">
          <img
            class="img-fluid"
            src="${product.images[0]}"
            alt=""
            srcset=""
            referrerpolicy="no-referrer"
          />
        </div>
    <div class="col col-md-5">
        <div>
            <h1>${product.title}</h1>
            <p class="fs-3 fw-bold">$${product.price}</p>
            <p class="fs-5">
              ${product.description}
            </p>
        </div>
    </div>
    `

    const productsContainer = document.querySelector('#product')
    productsContainer.innerHTML = productHTML
}