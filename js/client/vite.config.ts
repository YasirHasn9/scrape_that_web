import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // To handle React files such jsx/tsx
  plugins: [react()],
  build: {
    // vite use roll up under the hood to bundle the application 
    rollupOptions: {
      // To customize this bundle for our specific use, we are gonna use the rollupOptions
      input: {
        // input specifies multiple entries
        main: "index.html",
        content: "src/content.ts", // the code here will run on the designated web pages
        background: "src/background.ts"
      },
      output: {
        // The `output` defines how the entry points will be named
        entryFileNames: "[name].js"
      }
    }
  }
})



/*
In this file, we configure vite to build things.
Chrome extenstion requires multiple script including Content and Background. Vite's setup helps to deal with them differently and bundle them independently.
In the context of building a Chrome extention, the extenstion has various parts, and for the better we are gonna use `Vite` 
to manage these parts 
Parts:
1. Contnet
2. Background
3. React
*/