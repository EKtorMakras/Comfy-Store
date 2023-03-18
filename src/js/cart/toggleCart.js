import { dom } from '../dom.js';

export function toggleCartListeners() {
  
  dom.toggleCartBtn.addEventListener('click', () => {
    showCart();
  })

  dom.closeCartBtn.addEventListener('click', () => {
    hideCart();
  })

  dom.cartOverlay.addEventListener('click', (evt) => {
    if (!evt.target.closest('.cart')) {
      hideCart();
    }
  })
};


export function showCart() {
  dom.cartOverlay.classList.add('show');
}

export function hideCart() {
  dom.cartOverlay.classList.remove('show');
}