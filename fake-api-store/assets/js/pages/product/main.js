import { renderProduct } from "./renderProduct.js";


const searchParams = new URL(location.href).searchParams
const slug = searchParams.get('slug')

renderProduct(slug)