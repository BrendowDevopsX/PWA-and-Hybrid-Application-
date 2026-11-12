const CACHE_NAME = 'pwa-task-cache-v1';
const urlsToCache = [
    'index.html',
    'manifest.json'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    // TO DO 3: Intercept the fetch request. 
    // Return the cached version if it exists, otherwise fetch from the network.
    
});
