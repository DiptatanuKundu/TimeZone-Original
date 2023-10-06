const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        about: './about.html',
        contact: './contact.html',
        our_bots: "./our_bots.html",
        shop: "./shop.html"
        // ...
        // List all files you want in your build
      }
    }
  }
})
