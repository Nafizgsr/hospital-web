
export default {
  basePath: 'https://github.com/Nafizgsr/hospital-web',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
