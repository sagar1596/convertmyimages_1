module.exports = {
  reactStrictMode: true,
  distDir: 'dist',
  compress: false,
  env: {
    REACT_APP_SERVICE_ID: process.env.REACT_APP_SERVICE_ID,
    REACT_APP_TEMPLATE_ID: process.env.REACT_APP_TEMPLATE_ID,
    REACT_APP_USER_ID: process.env.REACT_APP_USER_ID,
  },
}
