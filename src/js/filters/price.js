import { domProducts } from '../dom.js';
import {getDomElement} from '../utils.js';
import { addActiveClass } from './companies.js';
import { displayProducts } from '../displayProducts.js';
import { displayNoResultsText } from './search.js';



export function setupPrice(store) {
  
  // set up filter
  const storePrices = store.map(product => product.price);
  
  let maxPrice = Math.max(...storePrices);
  maxPrice = Math.ceil(maxPrice / 100);


  domProducts.priceInput.value = maxPrice;
  domProducts.priceInput.max = maxPrice;
  domProducts.priceInput.min = 0;

  domProducts.priceValue.textContent = `Value : $${maxPrice}`;

  loadPriceListeners(store);
};


function loadPriceListeners(store) {
  domProducts.priceInput.addEventListener('input', (evt) => {
    const value = parseInt(domProducts.priceInput.value);
    
    domProducts.priceValue.textContent = `Value : $${value}`;

    const allBtn = getDomElement('button[data-name="all"]');
    addActiveClass(allBtn);


    let newStore = store.filter(product => product.price / 100 <= value);
    displayProducts(newStore,domProducts.productsContainer,true);

    if(newStore.length < 1) {
      displayNoResultsText();
    }
  })
}
