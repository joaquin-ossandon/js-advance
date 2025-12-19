export const getProducts = async () => {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");

    if (!response.ok) {
      if (response.status >= 500 && response.status < 600) {
        // de 500 a 599
        throw new Error("Hubo un error con el servidor");
      }
      throw new Error("Something went wrong! :c");
    }

    const products = await response.json();
    return products;

  } catch (error) {
    console.error(`message: ${error}`);
  }
};