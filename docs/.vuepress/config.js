console.log(require('./includes/sidebar'))
module.exports = {
  title: 'RAKwireless API Documentation',
  description: 'RAK API DOCUMENTATION',
  themeConfig: {
    editLinks: true,
    smoothScroll: true,
    label: 'English',
    editLinkText: 'Edit this page in GitHub',
    lastUpdated: 'Last Updated',
    sidebar: require('./includes/sidebar'),
    // sidebar: [
    //   {
    //     title: 'Group 1',   // required
    //     path: '/v1/',      // optional, link of the title, which should be an absolute path and must exist
    //     collapsable: true, // optional, defaults to true
    //     sidebarDepth: 2,    // optional, defaults to 1
    //     children: [
    //       {
    //         title: 'RUI API REFERENCE',
    //         to: '/v1/rui-api-reference',
    //       },
    //       {
    //         title: 'RUI BLE GENERAL FORMAT',
    //         to: '/v1/rui-ble-general-format',
    //       }
    //     ]
    //   },
    //   {
    //     title: 'Group 2',
    //     path: '/v2/',
    //     collapsable: true, // optional, defaults to true
    //     sidebarDepth: 2,    // optional, defaults to 1
    //     children: [
    //       {
    //         title: 'RUI API REFERENCE',
    //         to: '/v2/rui-api-reference',
    //       },
    //       {
    //         title: 'ARDUINO API',
    //         to: '/v2/arduino-api',
    //       }
    //     ]
    //   }
    // ],
    nav: [
      {
        text: 'RUI Version',
        items: [
          { text: 'v1', link: '/v1/' },
          { text: 'v2', link: '/v2/' }
        ]
      }
    ],
    sidebarDepth: 4,
    activeHeaderLinks: false,
    displayAllHeaders: true,
    search: false,
    searchMaxSuggestions: 10
  },
  plugins: {

    'vuepress-plugin-code-copy': {
      selector: 'div[class*="language-"] pre',
      align: 'top',
      color: '#ffffff',
      backgroundTransition: true,
      backgroundColor: '#ffffff',
      successText: 'Copied!'
    },
    // "@kawarimidoll/tailwind": {
    //   tailwindConfig: "style/config.js"
    // }

  },
  postcss: {
    plugins: [
      require("tailwindcss")("./tailwind.config.js"),
      require("autoprefixer"),
    ],
  },

  extraWatchFiles: [
    '.vuepress/**/*.js'
  ]
}
