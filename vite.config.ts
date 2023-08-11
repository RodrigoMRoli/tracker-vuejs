import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './', // configurar isso quando for pra produção. Vue não entende nativamente as diretivas do apache
  /* resolve: { // tive forçar esse resolve porque o vite não estava encontrando os types do Vue
    alias: { // workaround
      'vuex/types': './node_modules/vuex/types/index.js'
    }
  }, */
})
