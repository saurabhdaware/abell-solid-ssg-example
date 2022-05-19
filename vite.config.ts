import { defineConfig } from 'abell';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  // @ts-ignore
  plugins: [solidPlugin({ ssr: true })]
})