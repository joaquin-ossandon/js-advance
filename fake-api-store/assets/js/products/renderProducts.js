import { getProducts } from "./getProducts.js";

export const renderProducts = async () => {
  const products = await getProducts();
  let productsHTML = "";

  products.forEach((product) => {
    productsHTML += `
        <div class="col">
          <div class="card">
            <img
              src="${product.images[0]}"
              class="card-img-top"
              alt="${product.title}"
              referrerpolicy="no-referrer"
            />
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">
                ${product.description}
              </p>
              <p class=''>
                $${product.price}
              </p>
              <div class='grid-btn'>
                <a href="./pages/product.html?slug=${product.slug}" class="btn btn-primary">Ir al producto</a>
                <a href="./pages/create-product.html?id=${product.id}" class="btn btn-primary">Editar producto</a>
              </div>
            </div>
          </div>
        </div>
        `;
  });

  const productsContainer = document.querySelector("#products");
  productsContainer.innerHTML = productsHTML;
};
