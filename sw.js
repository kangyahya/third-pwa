importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');
workbox.skipWaiting();
workbox.clientsClaim();
if (workbox) {
  console.log(`Yay! Workbox is loaded `);

} else {
  console.log(`Boo! Workbox didn't load `);
}
workbox.core.setCacheNameDetails({
    prefix: 'My-football-cache',
    precache: 'precache',
    runtime: 'runtime',
  });
workbox.routing.registerRoute(
    new RegExp('\.css$'),
    workbox.strategies.cacheFirst({
        cacheName: 'My-football-cache-Stylesheets',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7, // cache for one week
                maxEntries: 20, // only cache 20 request
                purgeOnQuotaError: true
            })
        ]
    })
);
workbox.routing.registerRoute(
    new RegExp('\.js$'),
    workbox.strategies.cacheFirst({
        cacheName: 'My-football-cache-Javascripts',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7, // cache for one week
                maxEntries: 20, // only cache 20 request
                purgeOnQuotaError: true
            })
        ]
    })
);
workbox.routing.registerRoute(
    new RegExp('\.(png|svg|jpg|jpeg)$'),
    workbox.strategies.cacheFirst({
        cacheName: 'My-football-cache-Images',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7,
                maxEntries: 50,
                purgeOnQuotaError: true
            })
        ]
    })
);

workbox.routing.registerRoute(
    /^https:\/\/api\.football-data\.org\/v2\//,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'My-football-cache-Content',
	plugins:[
		new workbox.cacheableResponse.Plugin({statuses:[0,200]}),
		new workbox.expiration.Plugin({maxAgeSeconds: 60 * 30}),
	]
    })
);


//Notifikasi
self.addEventListener('push', function(event) {
  var body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message no payload';
  }
  var options = {
    body: body,
    icon: '/images/it-logo.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('Notification', options)
  );
});



workbox.precaching.precacheAndRoute([
  {
    "url": "competition.html",
    "revision": "10eaf57cbec856aa41cde7239c9811b3"
  },
  {
    "url": "fonts/material-design-icons/MaterialIcons-Regular.eot",
    "revision": "e79bfd88537def476913f3ed52f4f4b3"
  },
  {
    "url": "fonts/material-design-icons/MaterialIcons-Regular.ijmap",
    "revision": "ed6a98d002bc0b535dd8618f3ae05fe7"
  },
  {
    "url": "fonts/material-design-icons/MaterialIcons-Regular.svg",
    "revision": "a1adea65594c502f9d9428f13ae210e1"
  },
  {
    "url": "fonts/material-design-icons/MaterialIcons-Regular.ttf",
    "revision": "a37b0c01c0baf1888ca812cc0508f6e2"
  },
  {
    "url": "fonts/material-design-icons/MaterialIcons-Regular.woff",
    "revision": "012cf6a10129e2275d79d6adac7f3b02"
  },
  {
    "url": "fonts/material-design-icons/MaterialIcons-Regular.woff2",
    "revision": "570eb83859dc23dd0eec423a49e147fe"
  },
  {
    "url": "fonts/material-design-icons/README.md",
    "revision": "74139811f0c508b3cbd5ea285c643950"
  },
  {
    "url": "fonts/material-icons.css",
    "revision": "e0b244f38e9cd6f423b9b27455df3c41"
  },
  {
    "url": "images/favicon/android-icon-144x144.png",
    "revision": "a7349ffe84221053d97382bc9d77b1ca"
  },
  {
    "url": "images/favicon/android-icon-192x192.png",
    "revision": "3520e50698827cb2cc6f0b1b30acd6a2"
  },
  {
    "url": "images/favicon/android-icon-36x36.png",
    "revision": "372e37f013a9416604fb5b37066559e8"
  },
  {
    "url": "images/favicon/android-icon-48x48.png",
    "revision": "ce959bc08f5b6ee71b6ad6b0b884b78a"
  },
  {
    "url": "images/favicon/android-icon-512x512.png",
    "revision": "23a7e9e290006258693d130dd82d5aa5"
  },
  {
    "url": "images/favicon/android-icon-72x72.png",
    "revision": "e3ed9d0f9660b277d5481ded2b0c31b9"
  },
  {
    "url": "images/favicon/android-icon-96x96.png",
    "revision": "9ad20f019f898658a77be1b2ee865ce1"
  },
  {
    "url": "images/favicon/apple-icon-114x114.png",
    "revision": "009396bca723d3470ce66fa8de6b0072"
  },
  {
    "url": "images/favicon/apple-icon-120x120.png",
    "revision": "0b5bf5630fef41bf1c1e7b62e94e92d0"
  },
  {
    "url": "images/favicon/apple-icon-144x144.png",
    "revision": "a7349ffe84221053d97382bc9d77b1ca"
  },
  {
    "url": "images/favicon/apple-icon-152x152.png",
    "revision": "68313ac38459efa8d0085930db0cb1f0"
  },
  {
    "url": "images/favicon/apple-icon-180x180.png",
    "revision": "a786f94ad03888b373d410bb2fc1bcb6"
  },
  {
    "url": "images/favicon/apple-icon-57x57.png",
    "revision": "6c31116eddf6aeb1e705ce983a68a407"
  },
  {
    "url": "images/favicon/apple-icon-60x60.png",
    "revision": "cd4c9799adcfdbcc29960a5be71f6417"
  },
  {
    "url": "images/favicon/apple-icon-72x72.png",
    "revision": "e3ed9d0f9660b277d5481ded2b0c31b9"
  },
  {
    "url": "images/favicon/apple-icon-76x76.png",
    "revision": "4938594fc854f62950b1bdd15c08b9b8"
  },
  {
    "url": "images/favicon/apple-icon-precomposed.png",
    "revision": "7473ee7b668259789db0b3a4d680fe26"
  },
  {
    "url": "images/favicon/apple-icon.png",
    "revision": "7473ee7b668259789db0b3a4d680fe26"
  },
  {
    "url": "images/favicon/favicon-16x16.png",
    "revision": "7690aff07a974c68a72f679d19e09281"
  },
  {
    "url": "images/favicon/favicon-32x32.png",
    "revision": "cfa739ab0c870981e798b5c26857c387"
  },
  {
    "url": "images/favicon/favicon-96x96.png",
    "revision": "9ad20f019f898658a77be1b2ee865ce1"
  },
  {
    "url": "images/favicon/favicon.ico",
    "revision": "0389dafee485e39bc19187e880d04f5d"
  },
  {
    "url": "images/favicon/ms-icon-144x144.png",
    "revision": "a7349ffe84221053d97382bc9d77b1ca"
  },
  {
    "url": "images/favicon/ms-icon-150x150.png",
    "revision": "ce587c9f2e1707c58334e5e775bfd3e8"
  },
  {
    "url": "images/favicon/ms-icon-310x310.png",
    "revision": "f7d3e00cfbe96c23b4b296ebb156a575"
  },
  {
    "url": "images/favicon/ms-icon-70x70.png",
    "revision": "0c912e54612f099816c91a3bc559f3a0"
  },
  {
    "url": "images/it-logo.png",
    "revision": "d1f077c7744b6af57733bf36e9e6887e"
  },
  {
    "url": "images/it-logoo.png",
    "revision": "23a7e9e290006258693d130dd82d5aa5"
  },
  {
    "url": "images/noimage.png",
    "revision": "5261fd4f3309cc2a739380ce875cc159"
  },
  {
    "url": "images/yahya.png",
    "revision": "3e1a286eee2a5fcb3f006d06c3d770a4"
  },
  {
    "url": "index.html",
    "revision": "e0ee34b8a982329c3e8748305864e22b"
  },
  {
    "url": "js/api.js",
    "revision": "7fa2f76f72f17aef43a41ce40de72701"
  },
  {
    "url": "js/db.js",
    "revision": "742d567fef280c83b18747e5f221d33e"
  },
  {
    "url": "js/idb.js",
    "revision": "a66942528a8af114e8a0ae4b517ab0be"
  },
  {
    "url": "js/materialize.js",
    "revision": "9832259e6e013b2e55f342c053c26104"
  },
  {
    "url": "js/materialize.min.js",
    "revision": "5dcfc8944ed380b2215dc28b3f13835f"
  },
  {
    "url": "js/scripts.js",
    "revision": "a976019f26f59a14b0f3ce12d487488e"
  },
  {
    "url": "manifest.json",
    "revision": "6b69c324981c3ffc42517f384474cf75"
  },
  {
    "url": "nav.html",
    "revision": "55ac5d41faae1f96052a262adf13e1f9"
  },
  {
    "url": "pages/favorite.html",
    "revision": "2d5639a0eff6b440670cd8c6921583f9"
  },
  {
    "url": "pages/home.html",
    "revision": "44b908841b4bb801e59e130d02479578"
  },
  {
    "url": "pages/teams.html",
    "revision": "2f776c7f947b7303f4ee3c5dee89c3e4"
  },
  {
    "url": "style/materialize.css",
    "revision": "b0663391a6dd5efed956259f29fa18dd"
  },
  {
    "url": "style/materialize.min.css",
    "revision": "ec1df3ba49973dcb9ff212f052d39483"
  },
  {
    "url": "style/style.css",
    "revision": "3a651b19c1ddfe0ab4b447f7ec521a03"
  }
],{
      ignoreUrlParametersMatching: [/.*/]
    });
