export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'uecav',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyAgwdzlg1q7wlEJlQWkHx1jKDZhtQ82-dc",
          authDomain: "nuxttodoapp-f671c.firebaseapp.com",
          projectId: "nuxttodoapp-f671c",
          storageBucket: "nuxttodoapp-f671c.appspot.com",
          messagingSenderId: "265796976773",
          appId: "1:265796976773:web:9e6d4f549a4938301a29ec"
        },
        services: {
          auth: true,
          firestore: true
        }
      }
    ]
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
