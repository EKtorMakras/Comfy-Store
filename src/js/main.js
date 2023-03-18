// Import Css
// import '@/scss/style.scss'

// ======== Module Imports ======== //

// global imports
// import './toggleSidebar.js';
// import './cart/toggleCart.js';
// import './cart/setupCart.js';

// specific imports
import { dom,domMain } from './dom.js'
import { initTheme,toggleTheme } from './darkMode.js'
import { initStartingData } from './fillStartingData.js'
import { fetchProducts } from './fetchProducts.js'
import { setupStore, getFeaturedProducts ,store } from './store.js';
import {displayProducts} from './displayProducts.js';
import { toggleNavListeners } from './toggleSidebar.js';
import {toggleCartListeners} from './cart/toggleCart.js';
import { initCart } from './cart/setupCart.js';




// Init App
document.addEventListener('DOMContentLoaded', initApp)



// Functions
async function initApp() {
  initStartingData();
  initTheme();
  initCart();
  toggleNavListeners();
  toggleCartListeners();
  
  const products = await fetchProducts();
  if (products) {
    setupStore(products);
    const featuredProducts = getFeaturedProducts();
    displayProducts(featuredProducts,domMain.featuredCenter);
  }
}

