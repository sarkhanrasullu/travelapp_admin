const proxy = require("http-proxy-middleware");

const filter = (pathname, req) => {
  const result= pathname.match('^/api');
  return result;
};
//https://tripescorestapi.herokuapp.com/api
const myproxy = proxy(filter, { target: "http://tripescorestapi.herokuapp.com/api", changeOrigin: true });

module.exports = app => {
  app.use(myproxy);
};