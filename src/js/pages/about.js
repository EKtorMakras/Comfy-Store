// ======== Module Imports ======== //
import { dom } from '../dom.js'
import { initTheme,toggleTheme } from '../darkMode.js'
import { initStartingData } from '../fillStartingData.js'
import { toggleNavListeners } from '../toggleSidebar.js';
import {toggleCartListeners} from '../cart/toggleCart.js';
import { initCart } from '../cart/setupCart.js';


// Init App
document.addEventListener('DOMContentLoaded', initApp)



// Functions
async function initApp() {
  initStartingData();
  initTheme();
  initCart();
  toggleNavListeners();
  toggleCartListeners();
}
