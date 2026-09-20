const CACHE="money-planner-v4";
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(["./","./?v=4","./index.html","./manifest.json","./icon-192.png","./icon-512.png"]))) });
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{const u=new URL(e.request.url);if(u.origin===location.origin&&(u.pathname.endsWith("/index.html")||u.pathname.endsWith("/moneyplanner/"))){e.respondWith(fetch(e.request,{cache:"no-store"}).catch(()=>caches.match("./index.html")));return}e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))})
