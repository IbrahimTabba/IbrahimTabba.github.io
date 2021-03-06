'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f38e017cab8ed3f2ae5628497ef5e572",
".git/config": "7949ad80ce3c42efdb9fc60b5d90e0db",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "f12d0c3f37a1c2b9a1fac100d9f57dab",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "be05d80d7a4040993109398d97868eaa",
".git/logs/refs/heads/master": "be05d80d7a4040993109398d97868eaa",
".git/logs/refs/remotes/origin/master": "d13e6794a4eeed6c091db54ff158e87f",
".git/objects/03/09a163c9be8ac37c49656acc8a062f6ec9f24f": "70927bebb856801fadfd59bbdd3531ef",
".git/objects/04/a1d135289d8db14a41f698625a7a79a9be2a39": "bf49a110e48a2e7cfca7d9f1c2159a2f",
".git/objects/19/88efe4d4dc2b7d3a5b8b318c05f04a5435f15a": "75446344a6bc52f8cd49e0415d942c6a",
".git/objects/1c/305630808b891baee58c9ca934faa7a93953e2": "ead27401f1e8458b03463d59c3c9f6ed",
".git/objects/1d/bf5f096595318b74287555bed7ddd54f0bb9a7": "a955949a738efa601e67537d47b566b2",
".git/objects/1e/247e7ac610915e5d0b7d9982774c2935c2689c": "b3bec78b3c7d247f81e96e4366d8e68f",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/26/13ae2540f69fa7fd499c8fd47a0ac59c7f0eaa": "9e9d26dd891047190b3e9525a1993432",
".git/objects/2b/bf59c2a6c973e95a26380fad71d9ade698c181": "dfbc86b1aeab89a90f12e1b637a5897c",
".git/objects/2d/9e4c3cea326afb71c7cda647dae133bd9826e5": "088fbbcc734d7a54d75dc51d4a7ced72",
".git/objects/30/482d33afe43d3330c91b3459b4dada613816b4": "5d315df81827786b354ccccb0ef7ca58",
".git/objects/30/6a054b57eeccff89ae0fac951e0fd9e3ea63c0": "f2b6d78a27e5389cc6d2255331863e20",
".git/objects/34/9617654560fda689cdc7d949667aa36901aa99": "b70fd3c387ebfb9b9c41513891d9b8e8",
".git/objects/3a/3248b292724f876948568861faa059be842418": "448567dd1182a7165e0cea89c6fb3dea",
".git/objects/3e/915188b92bf6e0d9433d55e52b94587b1edd8f": "be3317ea2ee59414a2cf34566217865a",
".git/objects/3f/6a60b30980ab2298aa46167d24668bf5cdb64f": "c8ed7714e680cc5601370c2ea014f21d",
".git/objects/45/99e0f2dd5f216fb2c9c37ab5afec86bb635b78": "e34cfaf2fc7c06720c8bff243f9fcf0a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/a677edbf975edf3fdd7a65c896cf818f21719d": "cfa6aff75b62e72ace6690685737a846",
".git/objects/68/5553b9dd7baa7c220b97d0a0696c4ca517e271": "e454c3b576f86016a6642e77eede5c0d",
".git/objects/73/13bfe4f54abda664320b2fd2789f41dbf6fde2": "f3b4a8256a72a1e957937a89f0e6ac18",
".git/objects/75/c77bf214d544c7f34000ef4349eec7578bf951": "6b0d281e8593a0cea3e95d7027448bd1",
".git/objects/75/e363a79e0e2da600d8f827e6bdf99f28c23eff": "100495d7c3572acbddbbae9efeabfcdd",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/71892a08585c85911ac05a4e6e7c769c761071": "a015c67f95250dc88255dea98932a0e1",
".git/objects/7e/797b6e4761fb2e1e7bcf55669f032caa09e702": "cb28363346aea97495ae6489d2dda60b",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/6315ba768f7bddf7826f823df660a3aaf2abce": "970f01121427973ce97d38c658a2b171",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/f84f4f1f17cd5afafeb87e9ef62b5484367bac": "7aad0b4aa009ba6e1ebeb179cba8e8e7",
".git/objects/99/86d5c2b5dd9d9afbc1c2505e0d234faf6fe89b": "3ca8c3f5613761b1160aefe47762217a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/47b97690191d7e1dd234f4f00f10a254724439": "c9445add908dfe96838e75657b395410",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/ba6255596acff4483fddc8c39b9fe28eec1540": "1d0937cea9fe3dab9715fd86a8941db8",
".git/objects/b0/428c45e6733d7dbd739dfdf94ab0f8e3427203": "720ec1ca35b0a8204c4ddb7d2de273b8",
".git/objects/b4/c632aec4666d05cd7b28606797385280c24ebd": "e87526b88b28cb98d87e56f69c1c12c8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bf/004da8bba2ff9163072ef9d6d2783259c34df0": "2f67eb1ac90800c89e18d8472bcf4016",
".git/objects/c1/6e28337bc84d443a69e0bdf6d6e38bd82bcc51": "4f74445d4908976d5d205881fdb3d0c7",
".git/objects/c1/b70f5376e3173f2d07018c75c561231451c87c": "8ba748978b1a559bc23f05f2a92fdb29",
".git/objects/c2/21d82aef9538d87b24647520b3916877476fc3": "1fe4a2874e620a9c9a02b0b32aa4c521",
".git/objects/c4/7f3ece23d43e2fd34208c6c2009a5679acce90": "47f5998dd89edecd8de19dab243b445c",
".git/objects/cc/064857926c224298cf4cda8057d2b3a17189a4": "e6060eaa7d257813f6d30a91619c379a",
".git/objects/cd/98b881bcf679f6b5349f841db1bcf6ccd8a5cf": "8e408f39a4b3f5699992242bf54c3877",
".git/objects/ce/4e204642f88a542b0cc4ce01e0e0555e16afaa": "3c547e63dbe92cc5478d2ca3ddc3d50d",
".git/objects/d0/e78ed2a654cd40ff9b486410575028255b4571": "01aafcb7d190ce6e4e19614487906e51",
".git/objects/d3/2bb0c10515da910b0118438a17cced29e9d757": "cb52824591ba5200bbc4fb7ba3fc434e",
".git/objects/e2/85de8e0eb49b574d967f44c69255217f024d6c": "c91f975b7af9ce47c127775d6250bd58",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/7aab76218ec872616e086bd6a5fd71a1116652": "35aef3443806e74590f5b44412008419",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f6/28d49be1953d32b1acb9d9eefe32f1091d250c": "d29f01509ac01a65c7ae62e94ec7d30b",
".git/objects/f6/81c3aa869af0d65e9741b59656884bd6b38f52": "07c42cc27acdae3e6ba4d86cb7be5137",
".git/objects/f7/251be8f1016c187fd6a28f68f1827654f7c363": "c57719892dd021eb545827125e094153",
".git/objects/f8/17b44c84936811e7440c0bbdff5964dead94ad": "1c46dbceed194374375a25c9e92a33ba",
".git/objects/f9/bc5ee3c9112b2510cde71fc34f0aea3f29dbd1": "295190580e85f89249f84fdc121bf36b",
".git/objects/fb/26808379534f607525d626d6c94c048761de28": "32c4027dd3218058c2bea3c2742cf807",
".git/refs/heads/master": "337adefc44706b30b5c6832bda84da02",
".git/refs/remotes/origin/master": "337adefc44706b30b5c6832bda84da02",
"assets/AssetManifest.json": "096226f09ff732f7d0699e5ac3a6d593",
"assets/assets/images/brand_logo.png": "67310892c76ee9ab0e88441c0671a699",
"assets/assets/images/brand_logo2.png": "661b59708719147445b62d076244d41d",
"assets/assets/images/keyboard.png": "85eb4eeb51515ef98448772a9279e039",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "61ca60ce32edbd21fa6750acd54d5771",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "2a41f6d157b512739b15de96e8754c59",
"/": "2a41f6d157b512739b15de96e8754c59",
"main.dart.js": "2fc1de8fb8b317e5cf18a80bbea3f1bb",
"manifest.json": "c52aae5bea6362bd0acab462979c9c56",
"README.md": "631abdb7143bbff815a9176925d54b94",
"version.json": "426313f2f3133c2f20415344c4a22df3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
