
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-project/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-project"
  },
  {
    "renderMode": 2,
    "route": "/angular-project/api-page"
  },
  {
    "renderMode": 2,
    "route": "/angular-project/form"
  },
  {
    "renderMode": 2,
    "redirectTo": "/angular-project",
    "route": "/angular-project/**"
  }
],
  assets: {
    'index.csr.html': {size: 689, hash: 'af03b1f61b18d3450d6056c3557e2c17b0b5235cace816e5f1f87ecd92fd4363', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 979, hash: '2e4909c8f5f2ac641653ac48ee1ea34f08ee80b0488a5bacc94c57dbddea6b48', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'api-page/index.html': {size: 2875, hash: '188e04f91c6dcde1e3aa893f6dc876fe1cb60c2f41c632f611bfd11f0609698f', text: () => import('./assets-chunks/api-page_index_html.mjs').then(m => m.default)},
    'index.html': {size: 3018, hash: '04bc4c4c9a1be2f606a40511d92a58340df7424dc1bdab333fabb605514a9a8c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'form/index.html': {size: 5503, hash: '1ff57109bb76b83e0cbdf2417779e13671ecf5dedea54198d2b37d8914fea679', text: () => import('./assets-chunks/form_index_html.mjs').then(m => m.default)},
    'styles-MRK4VVTV.css': {size: 1052, hash: 'J3XOb2+l6qM', text: () => import('./assets-chunks/styles-MRK4VVTV_css.mjs').then(m => m.default)}
  },
};
