const PROXY_CONFIG = [
  {
    context: [
      "/api/breeds/image/random/"
    ],
    target: "https://dog.ceo",
    secure: true,
    changeOrigin: true,
    secure: true,
    logLevel: "info"
  },
  {
    context: [
      "/api/"
    ],
    target: "http://127.0.0.1:8000",
    secure: false,
    changeOrigin: true,
    secure: true,
    logLevel: "info"
  }
]

module.exports = PROXY_CONFIG;
