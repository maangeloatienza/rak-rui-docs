module.exports = {
  'Home': {
    title: 'Homepage',
    to: '/'
  },
  'RUI v1': {
    title: 'RUI v1',
    collapsable: true,
    to: '/v1/',
    children: [
      {
        title: 'RUI API REFERENCE',
        to: '/v1/rui-api-reference',
      },
      {
        title: 'RUI BLE GENERAL FORMAT',
        to: '/v1/rui-ble-general-format',
      }
    ]
  },
  'RUI v2': {
    title: 'RUI v2',
    collapsable: true,
    to: '/v2/',
    children: [
      {
        title: 'RUI API REFERENCE',
        to: '/v2/rui-api-reference',
      },
      {
        title: 'ARDUINO API',
        to: '/v2/arduino-api',
      }
    ]
  }
}

// module.exports = {
//   'home': [
//     '/'
//   ],
//   '/v1/': [
//     {
//       title: 'RUI v1',
//       path: '/v1/',
//       collapsable: false,
//       children: [
//         '/v1/rui-api-reference/'
//       ]
//     },

//   ],
//   '/v2/': [
//     {
//       title: 'RUI v2',
//       path: '/v2/',
//       collapsable: true,
//       children: [
//         '/v2/rui-api-reference/'
//       ]
//     },

//   ]

// }

// module.exports = {
//   'home': {
//     title: 'Homepage',
//     to: '/'
//   },
//   'getting-started': {
//     title: 'Getting Started',
//     to: '/rui/'
//   },
//   'v1': {
//     title: 'RUI v1',
//     collapsable: true,
//     to: '/v1/',
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
//   'v2': {
//     title: 'RUI v2',
//     collapsable: true,
//     to: '/v2/',
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
// }