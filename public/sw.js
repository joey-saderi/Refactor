if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return c[e]||(a=new Promise(async a=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=a}else importScripts(e),a()})),a.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},a=(a,c)=>{Promise.all(a.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(a)};self.define=(a,s,i)=>{c[a]||(c[a]=Promise.resolve().then(()=>{let c={};const n={uri:location.origin+a.slice(1)};return Promise.all(s.map(a=>{switch(a){case"exports":return c;case"module":return n;default:return e(a)}})).then(e=>{const a=i(...e);return c.default||(c.default=a),c})}))}}define("./sw.js",["./workbox-6f0d2936"],(function(e){"use strict";importScripts("worker-oHQGJGJhpGAaXA3vXbb7-.js"),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"oHQGJGJhpGAaXA3vXbb7-"},{url:"/_next/static/chunks/1bfc9850.684b3c0808db614bd966.js",revision:"706b1b8941784f76ecc77974b7637883"},{url:"/_next/static/chunks/22d225df.4c419f4b16a96bca7647.js",revision:"0f76c6f3cca30e5b890b037c53cdecd9"},{url:"/_next/static/chunks/4740a355006189b63681312a0b90c1362748b50e.8c9b0b01398c70bb9348.js",revision:"dd3abcb01f0222c2cc4b2790d27edd95"},{url:"/_next/static/chunks/597698dd.fb70499618dbb922262e.js",revision:"a75e2498200cb3665e2509b5fa185334"},{url:"/_next/static/chunks/7f882e1020cbad07f5941fb1c570bd3d586d283a.c028cd129cf8ff3bef5b.js",revision:"c35f250917d5dc811c826e9c92c7e4b9"},{url:"/_next/static/chunks/81cfa4cfe41ee886de454a579c8e34d88307e580.906a5acd02e1642e698c.js",revision:"06998027f026968fb221617230381ce7"},{url:"/_next/static/chunks/88fb9d5765769c9f1e3ebb63e1a3f8510bd03c65.6ecd659bfdb8a25ca423.js",revision:"4707f56512129133ff4da0661c4e0636"},{url:"/_next/static/chunks/95b64a6e.ed2651abc111e307ed2a.js",revision:"ca9e6a55ff427a6b94c48739049e81a0"},{url:"/_next/static/chunks/b5b8346a.ea4371fa7ccb19bf69b5.js",revision:"cebd4fdff891bd0b7dfa68cc35af9dbe"},{url:"/_next/static/chunks/c39d815b4ef8d874d15e6869cf9d50aa45325b10.a75cf9838af4280b617a.js",revision:"ff8c5bf38a0754058445e60892d4afb9"},{url:"/_next/static/chunks/commons.bd864dd016bbaa67f79f.js",revision:"5630570ebbc15b0956c7981a2365b579"},{url:"/_next/static/chunks/ef72cdfc78e58d0a63d8b076f2d4bd674c13721c.0c22de0c7ae6e48f65b7.js",revision:"37f08b7330d695585711460db4f12e53"},{url:"/_next/static/chunks/fonts/IRANSansWeb-07e13ce12b31374a49045aa55af2c0ad.eot",revision:"07e13ce12b31374a49045aa55af2c0ad"},{url:"/_next/static/chunks/fonts/IRANSansWeb-a5080d9e55b71a50ecd7b7d7ad022754.ttf",revision:"a5080d9e55b71a50ecd7b7d7ad022754"},{url:"/_next/static/chunks/fonts/IRANSansWeb-d4bb655d07591559e417030519d6fa20.woff",revision:"d4bb655d07591559e417030519d6fa20"},{url:"/_next/static/chunks/fonts/IRANSansWeb_Black-0cbe440ec1a4fe42b009993fd8997102.eot",revision:"0cbe440ec1a4fe42b009993fd8997102"},{url:"/_next/static/chunks/fonts/IRANSansWeb_Black-6e6d05b40fcf673a30ba169b0a253f3a.woff",revision:"6e6d05b40fcf673a30ba169b0a253f3a"},{url:"/_next/static/chunks/fonts/IRANSansWeb_Black-879c6f004e698c7b5c0d46b211ea0c5e.ttf",revision:"879c6f004e698c7b5c0d46b211ea0c5e"},{url:"/_next/static/chunks/fonts/IRANSansWeb_Bold-6ed6ddfe60d741b22e0e8ba1cb6797fb.woff",revision:"6ed6ddfe60d741b22e0e8ba1cb6797fb"},{url:"/_next/static/chunks/fonts/IRANSansWeb_Bold-cacb94575d6d37423b7395837795b5d9.eot",revision:"cacb94575d6d37423b7395837795b5d9"},{url:"/_next/static/chunks/fonts/IRANSansWeb_Bold-cf916372aab6c12b1ff00b062e843315.ttf",revision:"cf916372aab6c12b1ff00b062e843315"},{url:"/_next/static/chunks/fonts/IRANSansWeb_Light-160493399f8b048d4186ca4e22bc431d.ttf",revision:"160493399f8b048d4186ca4e22bc431d"},{url:"/_next/static/chunks/fonts/IRANSansWeb_Light-74955f1682e35e2e0dbb713f1c2e4ccd.woff",revision:"74955f1682e35e2e0dbb713f1c2e4ccd"},{url:"/_next/static/chunks/fonts/IRANSansWeb_Light-fe6168031376d4b4d922d0bad21a4b9a.eot",revision:"fe6168031376d4b4d922d0bad21a4b9a"},{url:"/_next/static/chunks/fonts/IRANSansWeb_Medium-32cc2377fd676f2386d705b3b6870020.woff",revision:"32cc2377fd676f2386d705b3b6870020"},{url:"/_next/static/chunks/fonts/IRANSansWeb_Medium-5a250015803362c88ca2ece29e25cc32.eot",revision:"5a250015803362c88ca2ece29e25cc32"},{url:"/_next/static/chunks/fonts/IRANSansWeb_Medium-caa93b16eb15d10bd1437ba92f9d80dc.ttf",revision:"caa93b16eb15d10bd1437ba92f9d80dc"},{url:"/_next/static/chunks/fonts/IRANSansWeb_UltraLight-264f4a4b036c9a87bee09f4e20929ac6.ttf",revision:"264f4a4b036c9a87bee09f4e20929ac6"},{url:"/_next/static/chunks/fonts/IRANSansWeb_UltraLight-368174c01a61e691225ce1e4d57a97e4.eot",revision:"368174c01a61e691225ce1e4d57a97e4"},{url:"/_next/static/chunks/fonts/IRANSansWeb_UltraLight-b35fd8e1a262d49862daa44b80af1b84.woff",revision:"b35fd8e1a262d49862daa44b80af1b84"},{url:"/_next/static/chunks/framework.ecf6a1465321f6975a4a.js",revision:"a6ffcc3fbc51a136797bdccc32a2fe32"},{url:"/_next/static/chunks/styles.3e74d461040398b287a4.js",revision:"466120a9fa55e3e693ecdb8867474f47"},{url:"/_next/static/css/22d225df.f5bf45d1.chunk.css",revision:"39e7046af396de6d39331ed393dbfc38"},{url:"/_next/static/css/styles.052400b8.chunk.css",revision:"833176d9a05d8fb580c99c7e15feed52"},{url:"/_next/static/images/404-befd95b25809c556f25131626a8d1930.png",revision:"befd95b25809c556f25131626a8d1930"},{url:"/_next/static/images/500-e7889ca60ed288a18597803173da27fa.png",revision:"e7889ca60ed288a18597803173da27fa"},{url:"/_next/static/images/car-image-e2d58e1a9cfd4f6b2e5e6f8600481373.jpg",revision:"e2d58e1a9cfd4f6b2e5e6f8600481373"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/_buildManifest.js",revision:"7584d074c588bf0a6f2e44069c61c5ea"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/pages/404.js",revision:"8fbbc858ecd9d42fdb61656116c811cc"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/pages/500.js",revision:"7d9fedca60e050c300ea865a178b4ce9"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/pages/_app.js",revision:"5a6cd99fe23e9977c5188a49da94e609"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/pages/_error.js",revision:"0896036acc8dcba6c4a7badb04f62701"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/pages/about-us.js",revision:"d3ebf984841002990130950a67e645c9"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/pages/add-car.js",revision:"ec1b0b6f0ac243351e3499ddf98ceb3d"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/pages/assurance.js",revision:"04d21522f4419e0984d9c5496bb5cc1d"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/pages/car-insurance.js",revision:"e122ae0ea2d41f69bacbbb7252afb236"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/pages/car/[id].js",revision:"2ad0db77fe493fd99c3ec374626e1b34"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/pages/checkout.js",revision:"0f43e232c1e4e3e2dc63536a6b709e64"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/pages/complete-register.js",revision:"0a81b66dbf2155261436e70c66ca1f65"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/pages/evaluation.js",revision:"2fc105d83b24563aec6fd88d8584eaa6"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/pages/faq.js",revision:"807e03225300db2d994e168fa88af5fc"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/pages/gps.js",revision:"32c65d650aa1a8d24acd989f819558a1"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/pages/guide-for-rent.js",revision:"0292d6db1d8955ddebf6c60a63bc6471"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/pages/guide-picture.js",revision:"b89bcb5373b571068da5a2d131a254d0"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/pages/guide-renter.js",revision:"6d1047429b0533337aa0bf0091baad3b"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/pages/index.js",revision:"7220deaf74daba4856c00c57db63ca02"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/pages/insurance-policies.js",revision:"24df0644b8600e1c1b4e017a49d11d20"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/pages/join-us.js",revision:"f36e5234e70066e1e86dbb7e100982a8"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/pages/join-us3.js",revision:"a261c75e32bf007f2084ed31f579be04"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/pages/join-us4.js",revision:"42a114c1a55fb6d9e13f442e6f0d16be"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/pages/otoli.js",revision:"1ebd737faf987d4c7736abdb1da6c570"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/pages/our-policies.js",revision:"5b41ba97590fe4bb16fe34194ebdf8dc"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/pages/peyment_failed.js",revision:"4cef311740221db523ad2ed8dfda5b26"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/pages/peyment_succeed.js",revision:"40d706a9d8c785178dcff4c237bbde17"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/pages/rent.js",revision:"0989611ff40713e49e1e614815ff9c96"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/pages/rent/[id].js",revision:"d8867195b3b56b600be0ab9a536d2ead"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/pages/request/[id].js",revision:"4f0d07b688c20ac32e1acb92c302044d"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/pages/requests.js",revision:"e23095bae1baa1e8a5ce2dbc849bfd4b"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/pages/search-result.js",revision:"b50656665c797e11a81b302ab1857a45"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/pages/set-car-timing.js",revision:"6ed0fa4c2afa6ccbaee03b7a47f65960"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/pages/site-map.js",revision:"598d66035e43887da32173e5b10cae2a"},{url:"/_next/static/oHQGJGJhpGAaXA3vXbb7-/pages/user/[id].js",revision:"e4d53139436747229f9b02345782d627"},{url:"/_next/static/runtime/main-3a2f498d8251bcc2022a.js",revision:"f8cf7bd67e2cc81afe8a7cf2a9025dd7"},{url:"/_next/static/runtime/polyfills-d306b15b1e27916ab058.js",revision:"86c70a207cfcfa86ce1b30b25c2b8f56"},{url:"/_next/static/runtime/webpack-6ef28db84b4c42ad34e9.js",revision:"40b4095b5b68a142c856f388ccb756f2"},{url:"/android-icon-144x144.png",revision:"07d244b0e154e1de914ee717744d529d"},{url:"/android-icon-192x192.png",revision:"a69041dc5ca7e64e43c84a15a98bc28c"},{url:"/android-icon-36x36.png",revision:"bdf25bfa55df8d7ba5e55bef7e58dcea"},{url:"/android-icon-48x48.png",revision:"146573ebee89ca1bfb1dcdd56638a18d"},{url:"/android-icon-72x72.png",revision:"14594022bb4e4f0d71a88a85a99bfa1b"},{url:"/android-icon-96x96.png",revision:"770d965173ccdd7f49f1a1271908a9f0"},{url:"/apple-icon-114x114.png",revision:"2f60854cf22ef63777a4802743a9e7b9"},{url:"/apple-icon-120x120.png",revision:"6bfbd6ec9a91648d1bcd096036d81a03"},{url:"/apple-icon-144x144.png",revision:"87d0133e1f18010032164beabf7662e2"},{url:"/apple-icon-152x152.png",revision:"791c932686939faefd611f98fda7d385"},{url:"/apple-icon-180x180.png",revision:"7edf7920d50d7032043708b325d172cc"},{url:"/apple-icon-57x57.png",revision:"47f85dab9105618ca5cdfcf943068bd5"},{url:"/apple-icon-60x60.png",revision:"8f8b2b3d2ede174d2cc3854a1fd1201f"},{url:"/apple-icon-72x72.png",revision:"4b6af7caffdd57a40cd9f1b5f046d171"},{url:"/apple-icon-76x76.png",revision:"56319432c68c90ad99a453ab2e67c8bc"},{url:"/apple-icon-precomposed.png",revision:"34539a295541aac25243302edf9a9d2a"},{url:"/apple-icon.png",revision:"3ee824ca3ff337278edd5155ea9923c1"},{url:"/browserconfig.xml",revision:"e0b7bb895ea7194b5afa9ed3b07200f3"},{url:"/favicon-16x16.png",revision:"c86804fcb5629d4b5d5e8099439d9b7f"},{url:"/favicon-32x32.png",revision:"0cbcefe245f1bdfed30f1b48f8351ce6"},{url:"/favicon-96x96.png",revision:"4903eb1430037599667b0bbdf9c74ec5"},{url:"/favicon.ico",revision:"412192267449ea67eebabd3e62acfe51"},{url:"/fonts/eot/IRANSansWeb.eot",revision:"60988e96c62583af6161ba98189bb2e5"},{url:"/fonts/eot/IRANSansWeb_Black.eot",revision:"6dc8fffed3bffa4eed74acde35df7806"},{url:"/fonts/eot/IRANSansWeb_Bold.eot",revision:"106edb34d8f875356374dbbb5693c67a"},{url:"/fonts/eot/IRANSansWeb_Light.eot",revision:"cea5324785821d4c6007b90062bbde7a"},{url:"/fonts/eot/IRANSansWeb_Medium.eot",revision:"a767beb66a15c84cc284a321ff534f94"},{url:"/fonts/eot/IRANSansWeb_UltraLight.eot",revision:"5ec21e9cbf04e49d5b77d3ee99c2c14e"},{url:"/fonts/ttf/IRANSansWeb.ttf",revision:"afa8bf88b43b2d57debc24e4e23402a3"},{url:"/fonts/ttf/IRANSansWeb_Black.ttf",revision:"59e8f14d5470e792d2e4fb752f16917e"},{url:"/fonts/ttf/IRANSansWeb_Bold.ttf",revision:"0e72a663d36602cad6928190d3233f74"},{url:"/fonts/ttf/IRANSansWeb_Light.ttf",revision:"fa628b10df2e587e1e6f640130ecc93d"},{url:"/fonts/ttf/IRANSansWeb_Medium.ttf",revision:"c307170408a9138d5285fa55bba94e23"},{url:"/fonts/ttf/IRANSansWeb_UltraLight.ttf",revision:"d111697ca07756f8e2c34a5433ddc99d"},{url:"/fonts/woff/IRANSansWeb.woff",revision:"cfc20d482fe1a50517165e33560e5508"},{url:"/fonts/woff/IRANSansWeb_Black.woff",revision:"a29e787ec7c1d0bfb83e9dd549a7aa34"},{url:"/fonts/woff/IRANSansWeb_Bold.woff",revision:"7259f5f831604a553cfbbd30287d7617"},{url:"/fonts/woff/IRANSansWeb_Light.woff",revision:"bf4d42a9ae66eb0d6585662ab030a9dc"},{url:"/fonts/woff/IRANSansWeb_Medium.woff",revision:"425e5ff360f9fce1908d607e5385bf53"},{url:"/fonts/woff/IRANSansWeb_UltraLight.woff",revision:"e58d1674196eed5f3cf53fdb5f1757fa"},{url:"/fonts/woff2/IRANSansWeb.woff2",revision:"edbe5f695c0c3194c0ba27d3df390144"},{url:"/fonts/woff2/IRANSansWeb_Black.woff2",revision:"d506c6f44afdc9a8c7599031a2f07ec4"},{url:"/fonts/woff2/IRANSansWeb_Bold.woff2",revision:"e2820128c3e14ebdd1849baf987a9257"},{url:"/fonts/woff2/IRANSansWeb_Light.woff2",revision:"5527b42f22c46db51e5f95b49f6bd7db"},{url:"/fonts/woff2/IRANSansWeb_Medium.woff2",revision:"f29d1694269cf3bcb285404231f3cbde"},{url:"/fonts/woff2/IRANSansWeb_UltraLight.woff2",revision:"48eb14e2c1b47b28a7ea9b6518b1509e"},{url:"/image/404.png",revision:"ac70fb1d7e47c6e59fbe68a43abc1e0c"},{url:"/image/500.png",revision:"5a0b340545359707d0aaa60646988d4b"},{url:"/image/SUV.svg",revision:"fba7ec6386f9c587a07e8bc5a43261c1"},{url:"/image/SamanInsurance.png",revision:"895f5e377adc8ebf40a68c140af2bad9"},{url:"/image/affordable.svg",revision:"170ba00c56a334e2178c00bb7fd76f0c"},{url:"/image/car-image-thumbnail.jpg",revision:"cce8e56e964ccd1840187f667109dabe"},{url:"/image/car-image.jpg",revision:"ec56eb0140895a6c516567e7ce90b1bc"},{url:"/image/car_vector.png",revision:"32dc38647e192c6c3c9881750d8211cc"},{url:"/image/index-landing.jpg",revision:"c16d968e0a1ba38de435cf5a6931a548"},{url:"/image/main_banner.jpg",revision:"3ef7d4ef55368bc0215e909a1391561b"},{url:"/image/parking.jpg",revision:"ed74fab9d4001f7973370f43250bd791"},{url:"/image/pelak.png",revision:"71b8d12ad100ab4e7703def8de4ad4da"},{url:"/logo_sticky.svg",revision:"5c37e8f9bb9550fe1bee67573f70aa23"},{url:"/manifest.json",revision:"688128be216cc2f753fe641590f2fcd3"},{url:"/ms-icon-144x144.png",revision:"497f7937d961fce92c945c426e5b1b30"},{url:"/ms-icon-150x150.png",revision:"fcc5e1d449de106a7ba0dd67a532526f"},{url:"/ms-icon-310x310.png",revision:"02a82c256fdcf514f69f180c5064e2d5"},{url:"/ms-icon-70x70.png",revision:"09714d62a2274008b638fdf3f996135e"},{url:"/zeit.svg",revision:"7b2022f3692adf56949c7019f7ebb670"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
