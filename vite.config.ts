import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import usePluginImport from 'vite-plugin-importer';
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
    usePluginImport({
      libraryName: '@mui/icons-material',
      libraryDirectory: '',
      camel2DashComponentName: false,
    }),
    usePluginImport({
      libraryName: '@mui/material',
      libraryDirectory: '',
      camel2DashComponentName: false,
    }),
    // vitePluginImp({
    //   libList: [
    //     {
    //       libName: '@mui/material',
    //       style: (name) => {
    //         if (name === 'col' || name === 'row') {
    //           return '';
    //         }
    //         return `antd/es/${name}/style/index.less`;
    //       },
    //     },
    //   ],
    // }),
  ],
});
