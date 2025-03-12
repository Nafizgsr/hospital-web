
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/Nafizgsr/hospital-web',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Nafizgsr/hospital-web/home",
    "route": "/Nafizgsr/hospital-web"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PFJPEDZG.js"
    ],
    "route": "/Nafizgsr/hospital-web/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WVBXTKNO.js"
    ],
    "route": "/Nafizgsr/hospital-web/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-X577TWVZ.js"
    ],
    "route": "/Nafizgsr/hospital-web/services"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EFJJ6BYH.js"
    ],
    "route": "/Nafizgsr/hospital-web/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EUMQ7H42.js"
    ],
    "route": "/Nafizgsr/hospital-web/departments"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YCFMILDA.js"
    ],
    "route": "/Nafizgsr/hospital-web/department"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZLCJFAOS.js"
    ],
    "route": "/Nafizgsr/hospital-web/doctor"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PVP33MF7.js"
    ],
    "route": "/Nafizgsr/hospital-web/doctors"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 28445, hash: 'db2fb9fa286b2375960b2d59112f2890d8d9ab005e0f1917fec9260bd5aa4df1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17749, hash: 'dcae0a3272811ad5246a4a1d63a236acd213117e050b9015e868c1edb6bf6257', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 59661, hash: 'b448c0254f543cbf22b0b858ade2cafab314d9a6722a036d50afebd68f230af9', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 51529, hash: '13d67ca734b1a1936f58da19d3cac227017ef840d633da0372b59420bf918db0', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 123306, hash: '6e6681e487bf84122402d7d8e5e51021f997b71b89967fe1dfac56efd7338735', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'department/index.html': {size: 60528, hash: 'da872cc59b5a9408830953fc981872b9f21a2703f753d88c07b409cdc80901a6', text: () => import('./assets-chunks/department_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 51027, hash: '0f65ffeb23769b9d791d70d425ba3f6e3d6a4349f87bfcafe5b5240afb9093a8', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'departments/index.html': {size: 57716, hash: '510971f0c8d7affb7f13a8385406e5644322823494f589b671670dc07f9c9a0f', text: () => import('./assets-chunks/departments_index_html.mjs').then(m => m.default)},
    'doctor/index.html': {size: 61274, hash: '3b6b40b48a7e8f93173ff50c06a4a1e20b074bd7614915eff29b4aa6d810a928', text: () => import('./assets-chunks/doctor_index_html.mjs').then(m => m.default)},
    'doctors/index.html': {size: 80896, hash: '7c9008fd430cdf69b09560516f273a191eea46fce356e4cc37fbe5fc9e849ec5', text: () => import('./assets-chunks/doctors_index_html.mjs').then(m => m.default)},
    'styles-PDNAQEBN.css': {size: 242369, hash: 'zxLiqOVTcps', text: () => import('./assets-chunks/styles-PDNAQEBN_css.mjs').then(m => m.default)}
  },
};
