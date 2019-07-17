const proxy = require("http-proxy-middleware");

const filter = (pathname, req) => {
  const result= pathname.match('^/api');
  return result;
};

const myproxy = proxy(filter, { target: "http://localhost", changeOrigin: true });

module.exports = app => {
  app.use(myproxy);
};