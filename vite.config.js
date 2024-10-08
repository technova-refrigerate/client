import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/v1': {
        target: 'https://79676842581.propelauthtest.com',
        changeOrigin: true,
        secure: false,
        // rewrite: (path) => path.replace(/^\/api\/v1/, '')
      },
      '/api': {
        target: "http://localhost:8080",
        changeOrigin: true,
        secure: false,
        // rewrite: path => path.replace('/api', ''),
        // ws: true,
        //   configure: (proxy, _options) => {
        //     proxy.on('error', (err, _req, _res) => {
        //       console.log('proxy error', err);
        //     });
        //     proxy.on('proxyReq', (proxyReq, req, _res) => {
        //       console.log('Sending Request to the Target:', req.method, req.url);
        //     });
        //     proxy.on('proxyRes', (proxyRes, req, _res) => {
        //       console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
        //     });
        // },
      }
    }    
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
