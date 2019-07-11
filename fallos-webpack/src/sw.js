const cacheName = "app-files";

const filesToCache = ["/", "/main.js"];

self.addEventListener('install', (event) => {
    console.log('Nuevo service worker');

    event.waitUntil(caches.open(cacheName)
    .then(cache => {
        console.log("Cache abierta");
        return cache.addAll(filesToCache);
    })
    )
});

self.addEventListener('activate', (event) => {
    console.log("Nuevo service worker");
})

self.addEventListener('fetch', (event) => {
    event.respondWith(caches.match(event.request)
    .then((res) => {
        if(res){
            return res;
        }else{
            return fetch(event.request);
        }
    })
    )
})