import { domProducts } from '../dom.js';
import {displayProducts} from '../displayProducts.js';
import { addActiveClass } from './companies.js';
import { getDomElement } from '../utils.js'; 


export function setupSearch(store) {
  domProducts.searchForm.addEventListener('keyup', () => {
    const enteredValue = domProducts.searchInput.value.toLowerCase();

    const allBtn = getDomElement('button[data-name="all"]');

    addActiveClass(allBtn);

    
    if (enteredValue) {

      // Clear Btn
      domProducts.searchClearIcon.classList.remove('hide');

      domProducts.searchClearIcon.addEventListener('click', () => {
        domProducts.searchInput.value = ''
        displayProducts(store, domProducts.productsContainer,true);
        addActiveClass(allBtn);
        domProducts.searchClearIcon.classList.add('hide');
        return;
      })

      const filteredStore = store.filter(product => {
        let { name} = product
        name = name.toLowerCase();

        if (name.includes(enteredValue)) {
          return product;
        }
      })

      displayProducts(filteredStore, domProducts.productsContainer,true);

      if (filteredStore.length < 1) {
        displayNoResultsText();
      }
    }

    else {
      domProducts.searchClearIcon.classList.add('hide');
      displayProducts(store, domProducts.productsContainer,true);
    }
  })
};


export function displayNoResultsText() {
  domProducts.productsContainer.innerHTML = `
    <h3 class="filter-error">Sorry, no products matched your search.</h3>
  `
};  