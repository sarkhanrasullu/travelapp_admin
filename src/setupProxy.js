const proxy = require("http-proxy-middleware");

const filter = (pathname, req) => {
  const result= pathname.match('^/api');
  return result;
};

const myproxy = proxy(filter, { target: "https://tripescorestapi.herokuapp.com", changeOrigin: true });

module.exports = app => {
  app.use(myproxy);
};