const getCategories = async () => {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/categories");

    if (!response.ok) {
      throw new Error("Ocurrió un error en el servidor");
    }

    const categories = await response.json();
    console.log(categories)
    return categories;
  } catch (error) {
    console.log(error);
  }
};

export const renderCategories = async (selectElement) => {
    const categories = await getCategories()
    let categoriesHTML = ''

    categories.forEach((category) => {
        categoriesHTML += `<option value="${category.id}">${category.name}</option>`
    })

    selectElement.innerHTML = categoriesHTML
}