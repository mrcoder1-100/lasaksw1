import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  // No proxy needed for Firebase as it uses direct SDK

  return {
    plugins: [react()],

    // Performance optimizations
    build: {
      // Enable minification
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true, // Remove console.logs in production
          drop_debugger: true
        }
      },

      // Chunk size warnings
      chunkSizeWarningLimit: 1000,

      // Rollup options for better code splitting
      rollupOptions: {
        output: {
          // Manual chunk splitting for optimal loading
          manualChunks: {
            // Vendor chunks
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
            'framer-motion': ['framer-motion'],
            'icons': ['lucide-react']
          },
          // Smaller chunk names
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]'
        }
      },

      // CSS code splitting
      cssCodeSplit: true,

      // Source maps (disable in production for smaller size)
      sourcemap: false
    },

    // Server optimizations
    server: {
      // Proxy removed as Firebase handles its own requests
    },

    // Optimize dependencies
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom', 'framer-motion']
    }
  }
})
