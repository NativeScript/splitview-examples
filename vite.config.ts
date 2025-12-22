import { defineConfig } from 'vite';
import { angularConfig } from '@nativescript/vite';;

export default defineConfig(({ mode }) => {
  const config = angularConfig({ mode });
  
  // Exclude source-map-js from optimizeDeps - it's a CommonJS module that
  // causes issues with Vite's transform pipeline during HMR HTTP boot.
  // It's bundled into the main bundle so we don't need Vite to process it.
  config.optimizeDeps = config.optimizeDeps || {};
  config.optimizeDeps.exclude = config.optimizeDeps.exclude || [];
  if (!config.optimizeDeps.exclude.includes('source-map-js')) {
    config.optimizeDeps.exclude.push('source-map-js');
  }
  
  // Also mark it as external for SSR-like handling
  config.ssr = config.ssr || {};
  config.ssr.external = config.ssr.external || [];
  if (!config.ssr.external.includes('source-map-js')) {
    config.ssr.external.push('source-map-js');
  }
  
  return config;
});
