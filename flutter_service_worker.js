'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3ed1cee172b5b06e7d9aa149c0ecec24",
"assets/AssetManifest.json": "c23b98bbfcb6108cd0c1bba6852812c5",
"assets/assets/bookme.png": "0f33d247e358ec4d50d626af91f1e743",
"assets/assets/buses.jpg": "30fde0bc2e597e2ae57b84357393bd72",
"assets/assets/care.png": "12fa1a84a562c0a5ce437d059e473985",
"assets/assets/ethihad.jpg": "905d406a70f4011acad09c322fe5541e",
"assets/assets/events.png": "3cfae77a40f4c8edd0920b076d026cae",
"assets/assets/explore.png": "128db834656627a02e9f94ac3cd43e9c",
"assets/assets/flights.png": "5bebccce603ad0f9f273c2f308de6163",
"assets/assets/google.png": "90edbdc555506f2b438bafa90067bfe4",
"assets/assets/gunjal.jpg": "11d4d8d5f65924f7facaf7ec4cfd20b6",
"assets/assets/jazz.jpg": "398ca38bc2c798a01c23976d7827a37c",
"assets/assets/loader.gif": "eef9571f50b1511e461f213af28cb0bd",
"assets/assets/loader.json": "69fde3dd498e05cd376412065092bc5c",
"assets/assets/mobile.png": "ece5537eaea31044a5e0093b6df15327",
"assets/assets/movies.avif": "7100ccfeb6d53714c1991d8f241f0ec8",
"assets/assets/posters.jpg": "ec198dce3dfc8e312a50a1394e3f2c5e",
"assets/assets/rentcarweb.png": "e225eaf73262b9199855f794aa3d2bbd",
"assets/assets/trains.jpg": "4df7cc9ce87078d0e7da4951a7e8c9fc",
"assets/FontManifest.json": "feab5bed431c3c29a8128951257bd61c",
"assets/fonts/arsenal.ttf": "f441060f0f1193eef78cdd16d690be16",
"assets/fonts/MaterialIcons-Regular.otf": "70e687ab20e8546c5106ea177f947844",
"assets/fonts/quicksand.ttf": "191a406a7e852a6a06dd6346733938f8",
"assets/NOTICES": "7d1c2db6e63f11813a9fafc64892e017",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "a48ca9e5bcc89fccac32592416234257",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"flutter_assets/AssetManifest.bin": "8c8e4a2e2ae3eb1f648ba6d6cec252a3",
"flutter_assets/AssetManifest.json": "1ebe90bf7a494c7108f8d63525c90e42",
"flutter_assets/assets/bookme.png": "0f33d247e358ec4d50d626af91f1e743",
"flutter_assets/assets/buses.jpg": "30fde0bc2e597e2ae57b84357393bd72",
"flutter_assets/assets/events.png": "3cfae77a40f4c8edd0920b076d026cae",
"flutter_assets/assets/explore.png": "128db834656627a02e9f94ac3cd43e9c",
"flutter_assets/assets/flights.png": "5bebccce603ad0f9f273c2f308de6163",
"flutter_assets/assets/google.png": "90edbdc555506f2b438bafa90067bfe4",
"flutter_assets/assets/loader.gif": "eef9571f50b1511e461f213af28cb0bd",
"flutter_assets/assets/loader.json": "69fde3dd498e05cd376412065092bc5c",
"flutter_assets/assets/movies.avif": "7100ccfeb6d53714c1991d8f241f0ec8",
"flutter_assets/assets/rentcarweb.png": "e225eaf73262b9199855f794aa3d2bbd",
"flutter_assets/assets/trains.jpg": "4df7cc9ce87078d0e7da4951a7e8c9fc",
"flutter_assets/FontManifest.json": "feab5bed431c3c29a8128951257bd61c",
"flutter_assets/fonts/arsenal.ttf": "f441060f0f1193eef78cdd16d690be16",
"flutter_assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"flutter_assets/fonts/quicksand.ttf": "191a406a7e852a6a06dd6346733938f8",
"flutter_assets/NOTICES": "2e7db21d63c0f42e5dd58c95487077d9",
"flutter_assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"flutter_assets/packages/ionicons/assets/fonts/Ionicons.ttf": "a48ca9e5bcc89fccac32592416234257",
"flutter_assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"icons/assets/AssetManifest.bin": "8c8e4a2e2ae3eb1f648ba6d6cec252a3",
"icons/assets/AssetManifest.json": "1ebe90bf7a494c7108f8d63525c90e42",
"icons/assets/assets/bookme.png": "0f33d247e358ec4d50d626af91f1e743",
"icons/assets/assets/buses.jpg": "30fde0bc2e597e2ae57b84357393bd72",
"icons/assets/assets/events.png": "3cfae77a40f4c8edd0920b076d026cae",
"icons/assets/assets/explore.png": "128db834656627a02e9f94ac3cd43e9c",
"icons/assets/assets/flights.png": "5bebccce603ad0f9f273c2f308de6163",
"icons/assets/assets/google.png": "90edbdc555506f2b438bafa90067bfe4",
"icons/assets/assets/loader.gif": "eef9571f50b1511e461f213af28cb0bd",
"icons/assets/assets/loader.json": "69fde3dd498e05cd376412065092bc5c",
"icons/assets/assets/movies.avif": "7100ccfeb6d53714c1991d8f241f0ec8",
"icons/assets/assets/rentcarweb.png": "e225eaf73262b9199855f794aa3d2bbd",
"icons/assets/assets/trains.jpg": "4df7cc9ce87078d0e7da4951a7e8c9fc",
"icons/assets/FontManifest.json": "feab5bed431c3c29a8128951257bd61c",
"icons/assets/fonts/arsenal.ttf": "f441060f0f1193eef78cdd16d690be16",
"icons/assets/fonts/MaterialIcons-Regular.otf": "330161bfbf1dc6216341b1b8831855ae",
"icons/assets/fonts/quicksand.ttf": "191a406a7e852a6a06dd6346733938f8",
"icons/assets/NOTICES": "2e7db21d63c0f42e5dd58c95487077d9",
"icons/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"icons/assets/packages/ionicons/assets/fonts/Ionicons.ttf": "a48ca9e5bcc89fccac32592416234257",
"icons/assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f69b34a75067002b02c00c11a84546fe",
"/": "f69b34a75067002b02c00c11a84546fe",
"main.dart.js": "b07a07e6177d647eee09825897e96943",
"manifest.json": "919779bed70297dba88a2851d4a0021d",
"version.json": "5392ed3f31084c5c6dfcbefdbf29a4a1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
