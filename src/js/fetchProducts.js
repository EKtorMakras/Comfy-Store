import { allProductsUrl } from './data.js';


export async function fetchProducts() {

  try {
    const response = await fetch(allProductsUrl)
    const data = await response.json();

    return data
  }
  
  catch (err) {
    console.log(err)
  }
}
