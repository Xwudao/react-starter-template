import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
// import usePluginImport from 'vite-plugin-importer';
import vitePluginImp from 'vite-plugin-imp';
// https://vitejs.dev/config/
const resolve = (p: string) => {
  return path.resolve(__dirname, p);
};
export default defineConfig({
  resolve: {
    alias: { '@': resolve('src') },
    extensions: ['.tsx', '.js', '.ts'],
  },
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: '@mui/icons-material',
          camel2DashComponentName: false,
          libDirectory: '',
          style: () => '',
        },
        {
          libName: '@mui/material',
          camel2DashComponentName: false,
          libDirectory: '',
          style: () => '',
        },
      ],
    }),
  ],
});
