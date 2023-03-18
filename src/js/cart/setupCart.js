// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getDomElement,
} from '../utils.js';
import { showCart } from './toggleCart.js';
import { findProduct } from '../store.js';
import {addToCartDOM} from './addToCartDOM.js';
import { dom } from '../dom.js';


let cart = getStorageItem('cart');


export function initCart() {
  displayCartItemCount();
  displayCartTotal();
  displayCartItemsDom();
  setUpCartListeners();
}



export function addToCart(id) {
  
  let item = cart.find(cartItem => cartItem.id === id);
  
  if (!item) {
    let product = findProduct(id);
    
    // add item to cart
    product = {
      ...product,
      amount: 1
    };

    cart = [...cart, product];

    // add item to Dom
    addToCartDOM(product);
  }

  else {
    const amount = increaseAmount(id);
    const items = [...dom.cartItems.querySelectorAll('.cart-item-amount')];
    const newAmount = items.find(item => item.dataset.id === id);
    newAmount.textContent = amount;
  }

  // add one to item count
  displayCartItemCount();

  // calculate total amount
  displayCartTotal();

  // set cart to storage
  setStorageItem('cart', cart);
  
  showCart();
};


function displayCartItemCount() {
  const amount = cart.reduce((total, item) => {
    return total += item.amount;
  }, 0)
  
  dom.cartItemCount.textContent = amount;
}

function displayCartTotal() {
  const amount = cart.reduce((total, item) => {
    return total += (item.amount * item.price);
  }, 0);

  dom.cartTotal.textContent = `Total: ${formatPrice(amount)}`;
}

function displayCartItemsDom() {
  cart.forEach(cartItem => {
    addToCartDOM(cartItem);
  });
}

function setUpCartListeners() {
  dom.cartItems.addEventListener('click', (evt) => {
    const element = evt.target.closest('button')
    
    if (element) {
      const id = element.dataset.id
      
      // Remove
      if (element.classList.contains('cart-item-remove-btn')) {
        removeItem(id);
        const parentCartItem = element.closest('.cart-item');
        parentCartItem.remove();
      }

      // Increase
      if (element.classList.contains('cart-item-increase-btn')) {
        const newAmount = increaseAmount(id);
        const parentCartItem = element.closest('.cart-item');
        const amountText = parentCartItem.querySelector('.cart-item-amount');
        amountText.textContent = newAmount;
      }

      // Decrease
      if (element.classList.contains('cart-item-decrease-btn')) {
        const newAmount = decreaseAmount(id);
        const parentCartItem = element.closest('.cart-item');

        if (newAmount === 0) {
          removeItem(id);
          parentCartItem.remove();
        }

        else {
          const amountText = parentCartItem.querySelector('.cart-item-amount');
          amountText.textContent = newAmount;
        }
      }
    }


    displayCartItemCount();
    displayCartTotal();
    setStorageItem('cart', cart);
  })
}


function increaseAmount(id) {
  let newAmount;

  cart = cart.map(cartItem => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount + 1;

      cartItem = {
        ...cartItem,
        amount: newAmount
      }
    }

    return cartItem;
  })

  return newAmount;
}

function decreaseAmount(id) {
  let newAmount;

  cart = cart.map(cartItem => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount - 1;


      cartItem = {
        ...cartItem,
        amount: newAmount
      }
    }

    return cartItem;
  })

  return newAmount;
}

function removeItem(id) {
  cart = cart.filter(item => item.id !== id);
  console.log(cart)
}