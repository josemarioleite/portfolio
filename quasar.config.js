const { configure } = require('quasar/wrappers');
const path = require('path');

module.exports = configure(function () {
  return {
    boot: ['globals'],
    css: ['app.scss'],
    extras: [
      'roboto-font',
      'material-icons'
    ],
    build: {
      target: {
        browser: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
        node: 'node20'
      },
      vueRouterMode: 'history',
      vitePlugins: [
        ['@intlify/vite-plugin-vue-i18n', {
          include: path.resolve(__dirname, './src/i18n/**')
        }]
      ]
    },
    devServer: {
      // https: true
      open: false
    },
    framework: {
      lang: 'pt-BR',
      config: {},
      plugins: []
    },
    animations: 'all',
    ssr: {
      pwa: false,
      prodPort: 3000,
      middlewares: ['render']
    },
    pwa: {
      workboxMode: 'generateSW',
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
      useCredentialsForManifestTag: false
    },
    cordova: {},
    capacitor: {
      hideSplashscreen: true
    },
    electron: {
      inspectPort: 5858,
      bundler: 'packager',
      packager: {},
      builder: {
        appId: 'meu-portfolio'
      }
    },
    bex: {
      contentScripts: [
        'my-content-script'
      ]
    }
  }
});
