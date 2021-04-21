const isDev = process.env.NODE_ENV
console.log(isDev)
// const BASE_URL = isDev ? 'http://localhost:3000' : 'https://z-tst.vercel.app/'

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'
console.log(BASE_URL)

export default {

  // https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config
  /**/
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL || 'URL/api/',
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'z_tst',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // DOC: https://nuxtjs.org/docs/2.x/features/loading
  loading: {
    continuous: true,
    color: '#8dc95e',
    height: '6px',
  },
  /*
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },
  */

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/axios'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast',
  ],
  toast: {},
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL:
      process.env.API_URL ||
      'https://attestation.bpms.rusatom.dedyn.io/api/v1/',
  },

  // auth
  auth: {
    strategies: {
      local: false,
      keycloak: {
        scheme: 'oauth2',
        endpoints: {
          authorization:
            'https://keycloak.smartsarov.ru/auth/realms/master/protocol/openid-connect/auth',
          token:
            'https://keycloak.smartsarov.ru/auth/realms/master/protocol/openid-connect/token',
          userInfo:
            'https://keycloak.smartsarov.ru/auth/realms/master/protocol/openid-connect/userinfo',
          logout:
            'https://keycloak.smartsarov.ru/auth/realms/master/protocol/openid-connect/logout?redirect_uri=' + encodeURIComponent(BASE_URL),
        },
        // ==================
        token: {
          // property: 'access_token',
          // type: 'Bearer',
          // name: 'Authorization',
          maxAge: 3600,
        },
        refreshToken: {
          property: 'refresh_token',
          maxAge: 3600, // 60 * 60 * 24 * 30,
        },
        // watchLoggedIn: true,
        // resetOnError: true,

        // responseType: 'code',
        // grantType: 'authorization_code',
        clientId: 'attestation-ui',
        scope: ['openid', 'profile', 'email'],
        codeChallengeMethod: 'S256',
      },
    },
    redirect: {
      login: '/login',
      // logout: '/',
      callback: '/',
      home: '/',
    },
  },

  // router: {
  //   middleware: ['auth'],
  // },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
