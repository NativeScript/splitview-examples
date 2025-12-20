import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.splitviewexamples',
  appPath: 'src',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  },
  bundler: 'vite',
  bundlerConfigPath: 'vite.config.ts'
} as NativeScriptConfig;