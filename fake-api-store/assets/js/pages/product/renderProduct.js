import { getProductBySlug } from "./getProductBySlug.js"

export const renderProduct = async (slug) => {
    const product = await getProductBySlug(slug)

    const productHTML = `
    <div class="col col-md-7">
          <img
            class="img-fluid"
            src="https://dummyimage.com/800x400/000/fff&text=${product.title}"
            alt=""
            srcset=""
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