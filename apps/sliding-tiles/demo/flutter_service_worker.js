'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6463d33ba74cfe1d6ba8de96f85df947",
"assets/AssetManifest.bin.json": "332ed790025b89e3e4a00ccd8afb06c8",
"assets/AssetManifest.json": "c373b9e97ce4a2bb1d5017ef780915f8",
"assets/assets/config/app_info.json": "b095390978093c9a8b74309a453e131f",
"assets/assets/dicesignature.png": "79917ea30fe6ff5a6684a03a97aca5ad",
"assets/assets/dicesignature_black.png": "b38dda3ae63071f39f57e6db95108cd8",
"assets/assets/favorites_card.webp": "c6b36689773f58d2fa30f16cbbdf647f",
"assets/assets/flags/DE.webp": "c76a0c7841898437a361c74e6155db35",
"assets/assets/flags/EN.webp": "f3f81662a255d63e40927e8f0ac1d457",
"assets/assets/flags/ES.webp": "ee494fc49df3bfb4f0c3ef3ac1c071d4",
"assets/assets/flags/FR.webp": "3a20f3267e5fd73b5fa4b2644e544bd4",
"assets/assets/flags/RU.webp": "d3f73f97eac17adf6a681e74c6a50a71",
"assets/assets/levelnotfound.webp": "a57596da69d73de1c288dfed93b8732b",
"assets/assets/mappacknotfound.webp": "d32dd2a283ca1d041f1d7e554f76fe0a",
"assets/assets/music/music_liminal2.mp3": "a04c0f675128c5a8de056decdab9add7",
"assets/assets/music/music_thebeach_4min.mp3": "c5e578d674a5abba647a13ac117733d4",
"assets/assets/recent_card.webp": "da1e9d9b17ad297c25244b06731bbfbc",
"assets/assets/sounds/click1.wav": "99b58ddc7436e85986760d03e3cc3732",
"assets/assets/sounds/pop1.wav": "8fae2362715adca69b2f790820a2e552",
"assets/assets/sounds/swipe.wav": "a91e7edd90412bb672d879ea29d0afaf",
"assets/assets/sounds/win1.wav": "45ecd17263e22184a1461e2da0528147",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0df461b088a3cbcc721f128d9cd63ea3",
"assets/map_packs/00_Numbers/cover.webp": "546db86f1baa2e92356ea0067a7bb936",
"assets/map_packs/05_Dice_Labs_Stories/4.webp": "512abdf31cf02c2f69b5dda26f7e50df",
"assets/map_packs/13_Acropolis/harry-shelton-pPxhM0CRzl4-unsplash.webp": "5a593fd9ad90341781275d5ea99dafdd",
"assets/map_packs/14_Cosmos/19072026010233z_2Gdfy_s0.webp": "12e46d1b308902e39e9709a16716469e",
"assets/map_packs/14_Cosmos/19072026010257sQUW3_uWHq.webp": "f3f0c74e3d845f63d3d93778cf4625a4",
"assets/map_packs/14_Cosmos/19072026010658AGZD2f5lXV.webp": "1d37310c92b210137982cd9c06c4c50e",
"assets/map_packs/16_Eden/19072026012643jhEG901d5d.webp": "9c7048549cb0fc94dadb6476c108599d",
"assets/map_packs/18_Tiny/maps.jsonc": "4ad8e139b2890232cdca086e49fddae9",
"assets/map_packs/19_Colossals/maps.jsonc": "9da86282fbb02ba503923348b0a98a04",
"assets/map_packs/map_packs.jsonc": "be1e81fa79daa259f4a2d80c3b8f7b40",
"assets/map_packs/__Random/1.webp": "2be08ab2ad23aa8834363113020b8004",
"assets/map_packs/__Tutorial/1.webp": "54cf03104469a65cad2770f73168d239",
"assets/NOTICES": "5199c636ff0e03d67486eac8326c55ea",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "f55ce71bf81c43bfc12c63ce0f599abb",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "310b7c371efb78fd0e9417dd1b8f11df",
"icons/Icon-192.png": "8905edbc4f07ba4a1f9e4a12ab8e1caa",
"icons/Icon-512.png": "dc11f30f3f9c0a46e8c7c00167430267",
"icons/Icon-maskable-192.png": "8905edbc4f07ba4a1f9e4a12ab8e1caa",
"icons/Icon-maskable-512.png": "dc11f30f3f9c0a46e8c7c00167430267",
"index.html": "6550ce337c17a750089deb6f77c3577a",
"/": "6550ce337c17a750089deb6f77c3577a",
"main.dart.js": "4aa6d252a20fb251c409cfad39d4a1ed",
"manifest.json": "c325c19264917ad0e48e834613b8edab",
"version.json": "053012619875d6381d524a2f4674df80"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
