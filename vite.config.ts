import { defineConfig } from 'vite';
import { angularConfig } from '@nativescript/vite';;

export default defineConfig(({ mode }) => angularConfig({ mode }));
