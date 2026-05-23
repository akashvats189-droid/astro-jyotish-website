import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Enable strict mode
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});
