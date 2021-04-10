module.exports = {
  presets: [
    '@vue/app'
  ],
  //babel7用户 在babel.config.js文件里配置
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true,
      },
      'vant',
    ],
  ],
}
