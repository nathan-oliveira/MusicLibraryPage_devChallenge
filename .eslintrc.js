module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    "quotes": "off",
    "vue/name-property-casing": "off",
    "semi": "off",
    "self-closing": "off",
    "vue/html-self-closing": "off",
    "vue/singleline-html-element-content-newline": "off",
    "space-before-function-paren": "off",
    "no-console": "off",
    "vue/require-prop-types": "off",
  }
}
