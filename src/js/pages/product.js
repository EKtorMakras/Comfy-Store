// ======== Module Imports ======== //
import {dom, domProduct} from '../dom.js';
import { singleProductUrl } from '../data.js';
import { initTheme,toggleTheme } from '../darkMode.js'
import { initStartingData } from '../fillStartingData.js'
import { toggleNavListeners } from '../toggleSidebar.js';
import {toggleCartListeners} from '../cart/toggleCart.js';
import { formatPrice, getParameterValue } from '../utils.js';
import { addToCart, initCart } from '../cart/setupCart.js';


// Init App
document.addEventListener('DOMContentLoaded', initApp)


// Functions
async function initApp() {
  initStartingData();
  initTheme();
  toggleNavListeners();
  toggleCartListeners();
  initCart();
  const productId = getProductId();
  const singleProductData = await fetchProduct(productId);
  if (singleProductData) {
    displayProduct(singleProductData);
    loadAddToCartListener(productId);
  }
}


async function fetchProduct(id) {
  
  try {
    const response = await fetch(`${singleProductUrl}/?id=${id}`);
    
    if (response.status>=200 && response.status <=299) {
      const data = await response.json();
      hideLoading();
      return data;
    }

    else {
      domProduct.center.innerHTML = `
        <div class="single-product-error">
          <h3 class="error">Sorry, something went wrong.</h3>
          <a href="index.html" class="btn">Back Home</a>
        </div>
      `
    }
  }

  catch(err) {
    console.log(err);
  }

  hideLoading();
}


function displayProduct(productData) {
  const {id, fields} = productData;
  const {name, company, price, colors, description} = fields;
  const image = fields.image[0].thumbnails.large.url;

  document.title = `${name.toUpperCase()} | Comfy`;
  domProduct.pageTitle.textContent = `Home / ${name}`;
  domProduct.productImg.src = image;
  domProduct.productTitle.textContent = name;
  domProduct.company.textContent = `by ${company}`;
  domProduct.price.textContent = formatPrice(price);
  domProduct.desc.textContent = description;

  // colors
  colors.forEach(color => {
    const span = document.createElement('span');
    span.classList.add('product-color');
    span.style.backgroundColor = color;
    domProduct.colors.appendChild(span);
  })
}


function hideLoading() {
  domProduct.pageLoading.style.display = 'none';
}


function getProductId() {
  const id = getParameterValue('id');
  return id;
}


function loadAddToCartListener(id) {
  domProduct.cartBtn.addEventListener('click', () => {
    addToCart(id);
  })
}

