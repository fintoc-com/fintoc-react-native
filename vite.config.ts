import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'main.ts'),
      name: 'fintoc-react-native',
      fileName: (format) => `main.${format}.js`,
    },
    sourcemap: true,
    rollupOptions: {
      external: ['react-native', 'react-native-webview'],
      output: {
        globals: {
          'react-native': 'ReactNative',
          'react-native-webview': 'ReactNativeWebView',
        },
      },
    },
  },
});
