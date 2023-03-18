import { formatPrice } from './utils.js';
import { addToCart } from './cart/setupCart.js';

export function displayProducts(productsArr, element, filters) {
  
  element.innerHTML = productsArr.map(product => {
    const {id, name, image, price} = product;
    return `
      <article class="product">
        <div class="product-container">
          <img src="${image}" class="product-img img" alt="${name}">
          <div class="product-icons">
            <a href="product.html?id=${id}" class="product-icon" target="_blank">
              <i class="fas fa-search"></i>
            </a>
            <button class="product-cart-btn product-icon" data-id="${id}">
              <i class="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
        <footer>
          <p class="product-name">${name}</p>
          <h4 class="product-price">${formatPrice(price)}</h4>
        </footer>
     </article>
    `
  }).join('');

  if (filters) return;

  addToCartListener(element);
}


function addToCartListener(element) {
  element.addEventListener('click', (evt) => {
    const parentBtn = evt.target.closest('.product-cart-btn')
    
    if (parentBtn) {
      addToCart(parentBtn.dataset.id)
    }
  })
}