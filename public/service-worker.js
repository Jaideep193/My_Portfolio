// Service Worker for PWA functionality
const CACHE_NAME = 'cse-portfolio-v1'
const urlsToCache = [
  '/',
  '/index.html',
  '/src/index.css',
]

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache)
    })
  )
})

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached version or fetch from network
      return response || fetch(event.request).then((response) => {
        // Clone the response
        const clonedResponse = response.clone()

        // Cache valid responses
        if (
          !event.request.url.includes('localhost') &&
          response.status === 200 &&
          response.type === 'basic'
        ) {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clonedResponse)
          })
        }

        return response
      }).catch(() => {
        // Return offline page if available
        return caches.match('/')
      })
    })
  )
})

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})
