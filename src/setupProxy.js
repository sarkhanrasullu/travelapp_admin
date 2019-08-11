const proxy = require("http-proxy-middleware");

const filter = (pathname, req) => {
  const result= pathname.match('^/api');
  return result;
};
//http://tripescorestapi.herokuapp.com
const myproxy = proxy(filter, { target: "http://tripescorestapi.herokuapp.com", changeOrigin: true });

module.exports = app => {
  app.use(myproxy);
};