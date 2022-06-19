import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    browser: {
      hydrate: false,
      router: false,
    },
    prerender: {
      default: true,
    },
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false
    })
  }
};