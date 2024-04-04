const { configure } = require('quasar/wrappers');
const path = require('path');

module.exports = configure(function (/* ctx */) {
  return {
    boot: ['i18n'],
    css: ['app.scss'],
    extras: [
      // 'ionicons-v4',
      // 'mdi-v7',
      // 'fontawesome-v6',
      // 'eva-icons',
      // 'themify',
      // 'line-awesome',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!
      'roboto-font', // optional, you are not bound to it
      'material-icons', // optional, you are not bound to it
    ],

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#build
    build: {
      target: {
        browser: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
        node: 'node20'
      },
      vueRouterMode: 'history', // available values: 'hash', 'history'
      // vueRouterBase,
      // vueDevtools,
      // vueOptionsAPI: false,
      // rebuildCache: true, // rebuilds Vite/linter/etc cache on startup
      // publicPath: '/',
      // analyze: true,
      // env: {},
      // rawDefine: {}
      // ignorePublicFolder: true,
      // minify: false,
      // polyfillModulePreload: true,
      // distDir
      // extendViteConf (viteConf) {},
      // viteVuePluginOptions: {},
      vitePlugins: [
        ['@intlify/vite-plugin-vue-i18n', {
          include: path.resolve(__dirname, './src/i18n/**')
        }]
      ]
    },
    devServer: {
      // https: true
      open: true
    },
    framework: {
      lang: 'pt-BR',
      config: {},
      plugins: []
      // iconSet: 'material-icons', // Quasar icon set
      // components: [],
      // directives: [],
    },
    // animations: 'all'
    animations: [],
    ssr: {
      // ssrPwaHtmlFilename: 'offline.html',
      // extendSSRWebserverConf (esbuildConf) {},
      // extendPackageJson (json) {},
      pwa: false,
      // manualStoreHydration: true,
      // manualPostHydrationTrigger: true,
      prodPort: 3000,
      middlewares: ['render']
    },
    pwa: {
      workboxMode: 'generateSW', // or 'injectManifest'
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
      useCredentialsForManifestTag: false,
      // useFilenameHashes: true,
      // extendGenerateSWOptions (cfg) {}
      // extendInjectManifestOptions (cfg) {},
      // extendManifestJson (json) {}
      // extendPWACustomSWConf (esbuildConf) {}
    },
    cordova: {},
    capacitor: {
      hideSplashscreen: true
    },
    electron: {
      // extendElectronMainConf (esbuildConf)
      // extendElectronPreloadConf (esbuildConf)
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
