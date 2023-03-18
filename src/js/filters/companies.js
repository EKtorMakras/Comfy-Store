import { domProducts } from '../dom.js';
import {displayProducts} from '../displayProducts.js';
import { arrGetUniqueValues, getDomElement } from '../utils.js'; 


export function setupCompanies(store) {
  let companies = arrGetUniqueValues (store,'company');
  companies.unshift('all');

  domProducts.companies.innerHTML = companies.map(company => {
    return `
      <button class="company-btn" data-name="${company}">${company}</button>
    `
  }).join('');

  const allBtn = getDomElement('button[data-name="all"]');
  allBtn.classList.add('active');

  loadCompaniesListeners(store);
}


function loadCompaniesListeners(store) {
  domProducts.companies.addEventListener('click', (evt) => {
    const element = evt.target;
    
    if (element.classList.contains('company-btn')) {
      addActiveClass(element);
      let newStore = [];

      if (element.dataset.name === 'all') {
        newStore = [...store];
      }

      else {
        newStore = store.filter(product => {
          return product.company === element.dataset.name;
        })
      }

      displayProducts(newStore,domProducts.productsContainer,true);
    }
  })
}


export function addActiveClass(element) {
  const filterBtns = getDomElement('.company-btn',true)
  
  filterBtns.forEach(btn => {
    btn.classList.remove('active');
  });

  element.classList.add('active');
}