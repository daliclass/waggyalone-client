console.log(process.env.CLIENT_ID)
console.log(process.env.AUTH_AUDIENCE)
console.log(process.env.AUTH_REDIRECT_URI)
console.log(process.env.AUTH_LOGIN_REDIRECT_URI)

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'WaggyAlone',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Helping owners train their dogs to be happy when left home alone. Puppy or grown-up this course is here to provide guidance, tips and support.' }
    ],
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-921YK5Z1EV',
        async: true
      },
      { src: '/js/google-analytics.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/auth-next',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true
  },

  proxy: {
    '/api/': process.env.SERVER_URL || 'http://localhost:8080'
  },

  auth: {
    strategies: {
      auth0: {
        domain: process.env.AUTH_DOMAIN,
        clientId: process.env.CLIENT_ID,
        audience: process.env.AUTH_AUDIENCE,
        redirectUri: process.env.AUTH_REDIRECT_URI,
        logoutRedirectUri: process.env.AUTH_LOGIN_REDIRECT_URI
      }
    }
  },

  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  server: {
    host: '0.0.0.0'
  }
}
