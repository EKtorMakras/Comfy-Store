
// App Name
export const AppName = import.meta.env.VITE_APP_NAME

// URLS
export const BASE_URL = import.meta.env.VITE_BASE_URL

export const allProductsUrl = `${BASE_URL}/javascript-store-products`

export const singleProductUrl = `${BASE_URL}/javascript-store-single-product`


// DOM Data

export const navLinks = [
  {
    value: 'home',
    url: 'index.html',
    icon: 'fas fa-home fa-fw'
  },
  {
    value: 'about',
    url: 'about.html',
    icon: 'fas fa-couch fa-fw'
  },
  {
    value: 'products',
    url: 'products.html',
    icon: 'fas fa-book fa-fw'
  }
]