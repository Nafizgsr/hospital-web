
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/hospital-web/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/hospital-web/home",
    "route": "/hospital-web"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PFJPEDZG.js"
    ],
    "route": "/hospital-web/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WVBXTKNO.js"
    ],
    "route": "/hospital-web/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-X577TWVZ.js"
    ],
    "route": "/hospital-web/services"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EFJJ6BYH.js"
    ],
    "route": "/hospital-web/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EUMQ7H42.js"
    ],
    "route": "/hospital-web/departments"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YCFMILDA.js"
    ],
    "route": "/hospital-web/department"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZLCJFAOS.js"
    ],
    "route": "/hospital-web/doctor"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PVP33MF7.js"
    ],
    "route": "/hospital-web/doctors"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 28419, hash: '00f41b6aa6bab144a8b61480e026922a19214a47479e6911450407bef16cc271', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17723, hash: '3b74d6492d065da677de69d52b8b2d5f14829dded72e922b07e2a06ecf622e94', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 59419, hash: '125f43e316e462c638960c63d72e21a4cb7baf937d1041cb6d878beb480a4ddc', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 51341, hash: '6b474e30e55d44a949401b70a2b702fd266b983036d2e051abbb43a83fa3500b', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'department/index.html': {size: 60340, hash: '635dfce124ba3878b53b22b15d687141da17c22bb18395ce295d7c83324f6dbf', text: () => import('./assets-chunks/department_index_html.mjs').then(m => m.default)},
    'departments/index.html': {size: 57528, hash: '7989bf3a42fe4f02a84134b3c40d83581b0f4ebc4d894f9f879ffa574856be02', text: () => import('./assets-chunks/departments_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 123118, hash: '0ffb76ab4a8e6adbeac7376d06fce01e4ac0705197440e8b12374e84fe4556df', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'doctor/index.html': {size: 61086, hash: 'f2076092304c5a8a497fdbe5d01dfaf1b2ddbed9c8cf983bfd5e177ecd8c5875', text: () => import('./assets-chunks/doctor_index_html.mjs').then(m => m.default)},
    'doctors/index.html': {size: 80708, hash: 'a4a3ec68bafb43d3217e6eded869fdf4075d974c3609be82a83b98231798b61d', text: () => import('./assets-chunks/doctors_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 50839, hash: 'cdfc4cc55d3ce64f3f67636207840048046d0d7bbbb0c9df347f21996ba9a46c', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-PDNAQEBN.css': {size: 242369, hash: 'zxLiqOVTcps', text: () => import('./assets-chunks/styles-PDNAQEBN_css.mjs').then(m => m.default)}
  },
};
