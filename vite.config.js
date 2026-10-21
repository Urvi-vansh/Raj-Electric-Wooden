import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Dynamic static asset fallback middleware:
// Ensures any images/assets in public/ are always served with correct MIME types
// and prevents SPA fallback from serving index.html on newly added assets.
const dynamicPublicServing = () => ({
  name: 'dynamic-public-serving',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.method !== 'GET' && req.method !== 'HEAD') return next()
      const rawUrl = req.url ? req.url.split('?')[0] : ''
      const safePath = path.normalize(decodeURIComponent(rawUrl)).replace(/^(\.\.[\/\\])+/, '')
      const publicFilePath = path.join(__dirname, 'public', safePath)

      try {
        if (fs.existsSync(publicFilePath) && fs.statSync(publicFilePath).isFile()) {
          const ext = path.extname(publicFilePath).toLowerCase()
          const mimeTypes = {
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.png': 'image/png',
            '.svg': 'image/svg+xml',
            '.webp': 'image/webp',
            '.gif': 'image/gif',
            '.ico': 'image/x-icon',
            '.mp4': 'video/mp4',
            '.json': 'application/json',
            '.webmanifest': 'application/manifest+json'
          }
          if (mimeTypes[ext]) {
            res.setHeader('Content-Type', mimeTypes[ext])
          }
          return fs.createReadStream(publicFilePath).pipe(res)
        }
      } catch (e) {
        // Fall through to standard Vite handling if any error
      }
      next()
    })
  }
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dynamicPublicServing()],
  server: {
    host: true,
    port: 5174,
  },
})
