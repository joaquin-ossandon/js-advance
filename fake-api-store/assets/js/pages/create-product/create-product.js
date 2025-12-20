import { renderCategories } from "../../categories/getCategories.js";
import { getProductById } from "../product/getProductBySlug.js";

const locationURL = new URL(location.href);
const productId = locationURL.searchParams.get("id");

if (locationURL.searchParams.has("id")) {
  getProductInfo(productId);
}

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const product = getFormData(form);

  if (!locationURL.searchParams.has("id")) {
    postProduct(product);
  } else {
    updateProduct(productId, product)
  }
});

const getFormData = (form) => {
  const formData = new FormData(form);

  const newProduct = Object.fromEntries(formData.entries());

  newProduct.price = Number(newProduct.price);
  newProduct.categoryId = Number(newProduct.categoryId);
  newProduct.images = newProduct.images.split(", ");

  return newProduct;
};

const postProduct = async (product) => {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/products/", {
      method: "POST",
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      throw new Error("Ocurrió un error en el servidor");
    }
  } catch (error) {
    console.error(error);
  }
};

const updateProduct = async (productId, product) => {
  try {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`, {
      method: "PUT",
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      throw new Error("Ocurrió un error en el servidor");
    }
  } catch (error) {
    console.error(error);
  }
};

const selectElement = document.querySelector("select");
renderCategories(selectElement);

async function getProductInfo(id) {
  const productName = document.querySelector("#product-name");
  const productPrice = document.querySelector("#product-price");
  const productDescription = document.querySelector("#product-description");
  const productCategoy = document.querySelector("#product-category");
  const productImages = document.querySelector("#product-images");

  const product = await getProductById(id);

  productName.value = product.title;
  productPrice.value = product.price;
  productDescription.value = product.description;
  productCategoy.value = product.category.id;
  productImages.value = product.images.join(", ");
}
