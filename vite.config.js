
import { defineConfig } from 'vite';
import path from 'path';
import { resolve } from 'path';


export default defineConfig(() => {
 
  return {

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },

    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          about: resolve(__dirname, 'about.html'),
          products: resolve(__dirname, 'products.html'),
          product: resolve(__dirname, 'product.html'),
        },
      },
    },
  }
})
