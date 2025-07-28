// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
      css: {
          preprocessorOptions: {
              scss: {
                  api: "modern-compiler"
              }
          }
      }
  },
    i18n:{
      locales: ['pl', 'en', 'de'],
      defaultLocale: 'pl',
        routing: {
            prefixDefaultLocale: false,
            redirectToDefaultLocale: true,
        }
    }
});
