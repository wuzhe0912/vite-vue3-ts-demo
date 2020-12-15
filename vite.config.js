module.exports = {
  optimizeDeps: {
    include: ['dayjs/plugin/relativeTime', 'dayjs/locale/zh-tw'],
    exclude: ['@fortawesome/fontawesome-free', '@fortawesome/vue-fontawesome'],
  },
  cssPreprocessOptions: {
    scss: {
      additionalData: `
        @use 'src/scss/_variable' as var;
        @use 'src/scss/_function.scss' as func;
        @use 'src/scss/_mixin.scss' as mix;
      `
    }
  }
};