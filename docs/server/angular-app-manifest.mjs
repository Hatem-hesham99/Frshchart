
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/frshCartApp/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/frshCartApp/home",
    "route": "/frshCartApp"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IGOMHHRN.js",
      "chunk-QUBHQM4X.js"
    ],
    "route": "/frshCartApp/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YCYH6U6R.js",
      "chunk-QUBHQM4X.js"
    ],
    "route": "/frshCartApp/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2TPVXOSR.js",
      "chunk-QUBHQM4X.js"
    ],
    "route": "/frshCartApp/resetpass"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JMCB5DYK.js",
      "chunk-IJSVREAX.js",
      "chunk-2WDGKO7E.js",
      "chunk-X3AX2PIX.js"
    ],
    "route": "/frshCartApp/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-33CVHLOM.js"
    ],
    "route": "/frshCartApp/cart"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-5TRCCDJN.js",
      "chunk-QUBHQM4X.js",
      "chunk-XAJFFACF.js"
    ],
    "route": "/frshCartApp/chackout/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6RZSJPVH.js",
      "chunk-XAJFFACF.js"
    ],
    "route": "/frshCartApp/allorders"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OCIKBTNP.js",
      "chunk-X3AX2PIX.js"
    ],
    "route": "/frshCartApp/products"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6GCM7XLE.js",
      "chunk-IJSVREAX.js"
    ],
    "route": "/frshCartApp/categorise"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Y5NJI6HN.js"
    ],
    "route": "/frshCartApp/brands"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-GSBEYFUT.js",
      "chunk-2WDGKO7E.js",
      "chunk-X3AX2PIX.js"
    ],
    "route": "/frshCartApp/details/*/*"
  },
  {
    "renderMode": 2,
    "route": "/frshCartApp/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3746, hash: 'b082312477e28a9974aaf6d66a809d88dfcdba756b6ef344d6ae8e7fdf769dd8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1427, hash: '45209b858e2f2268411c21f5fd192e6dcc1df3a1729dbedf0bd12bac3019c10f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 4686, hash: '427777d2005cf31d263e66387a065b38a8444ecc9f2f70918563a058f103857e', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 4686, hash: 'afb173320aec4d3a39405c2f1325ce2350db60fe98a5ad894b81af20583ec6b2', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'resetpass/index.html': {size: 4686, hash: '16d82941519710ea4d9a1be63afade4d6d54c5df969ef9f48b8676f60b8b26ab', text: () => import('./assets-chunks/resetpass_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 4790, hash: 'bc10030cab7fa4304e21f167be1d39ed8838f2e3d3ddcc899d1df03a58387957', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'allorders/index.html': {size: 4686, hash: 'd042c45ae074a29859908090d42fd3c8ff1492fb63cc45463b54bfe736165cf1', text: () => import('./assets-chunks/allorders_index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 4634, hash: 'ef0672e2ef97798b8d4a1c3faed9a44c2a56e02457743a2501757325c69de946', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 4686, hash: '715f7cb507c6428126c0366342e877f04676db50e49d991991288af8ecaee311', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'categorise/index.html': {size: 4686, hash: 'e96fbb89822f9937d207f5c0281b013e959659fabf73931a79f93fe344567dd5', text: () => import('./assets-chunks/categorise_index_html.mjs').then(m => m.default)},
    'brands/index.html': {size: 4634, hash: '55917c0b08b05e4261a0326399b9285606fd414a9b50c24e0753cb84970d6d94', text: () => import('./assets-chunks/brands_index_html.mjs').then(m => m.default)},
    'styles-YFLQGOJT.css': {size: 141091, hash: 'kMonrx0N4gs', text: () => import('./assets-chunks/styles-YFLQGOJT_css.mjs').then(m => m.default)}
  },
};
