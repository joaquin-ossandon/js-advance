// https://api.escuelajs.co/api/v1/products/slug/handmade-fresh-table

export const getProductBySlug = async (slug) => {
  try {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products/slug/${slug}`);

    if (!response.ok) {
      if (response.status >= 500 && response.status < 600) {
        // de 500 a 599
        throw new Error("Hubo un error con el servidor");
      }
      throw new Error("Something went wrong! :c");
    }

    const product = await response.json();
    return product;

  } catch (error) {
    console.error(`message: ${error}`);
  }
};

export const getProductById = async (id) => {
  try {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);

    if (!response.ok) {
      if (response.status >= 500 && response.status < 600) {
        // de 500 a 599
        throw new Error("Hubo un error con el servidor");
      }
      throw new Error("Something went wrong! :c");
    }

    const product = await response.json();
    return product;

  } catch (error) {
    console.error(`message: ${error}`);
  }
};