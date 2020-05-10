export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel: 'stylesheet' },
      { href: 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.css', rel: 'stylesheet' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js' }
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
    '~/assets/styles/reset.scss',
    '~/assets/styles/_viewportscale.scss',
    '~/assets/styles/main.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/inject-getMonthName', ssr: false },
    '~/plugins/inject-getMonthName.js',
    '~/plugins/inject-getTargetMonths.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    loaders: {
      scss: { sourceMap: false },
    }
  }
}
