import { getDomElement } from "./utils";
import { addToCart } from './cart/setupCart';

export const dom = {
  root: document.documentElement,

  navLinks: getDomElement('.nav-links'),
  toggleNavBtn: getDomElement('.toggle-nav'),
  closeNavBtn: getDomElement('.sidebar-close'),

  sidebarLinks: getDomElement('.sidebar-links'),
  sidebarOverlay: getDomElement('.sidebar-overlay'),

  cartItemCount: getDomElement('.cart-item-count'),
  cartOverlay: getDomElement('.cart-overlay'),
  cartItems: getDomElement('.cart-items'),
  toggleCartBtn: getDomElement('.toggle-cart'),
  closeCartBtn: getDomElement('.cart-close'),
  cartTotal: getDomElement('.cart-total')
}

export const domMain = {
  featuredCenter: getDomElement('.featured-center'),
}


export const domProducts = {
  productsContainer: getDomElement('.products-container'),
  pageLoading: getDomElement('.products-page-loading'),
  searchForm: getDomElement('.search-form'),
  searchInput: getDomElement('.search-input'),
  searchClearIcon: getDomElement('.search-clear-icon'),
  companies: getDomElement('.companies'),
  priceInput: getDomElement('.price-filter'),
  priceValue: getDomElement('.price-value'),
}


export const domProduct = {
  pageLoading: getDomElement('.page-loading'),
  center: getDomElement('.single-product-center'),
  pageTitle: getDomElement('.page-hero-title'),
  productImg: getDomElement('.single-product-img'),
  productTitle: getDomElement('.single-product-title'),
  company: getDomElement('.single-product-company'),
  price: getDomElement('.single-product-price'),
  colors: getDomElement('.single-product-colors'),
  desc: getDomElement('.single-product-desc'),
  cartBtn: getDomElement('.addToCartBtn'),
}