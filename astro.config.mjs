// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://otisdaley-vg.github.io',
  base: '/ai-features',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
