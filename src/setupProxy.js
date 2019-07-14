const proxy = require("http-proxy-middleware");

const filter = (pathname, req) => {
  console.log('===filter===');
  console.log(pathname);
  const result= pathname.match('^/api');
  console.log('redirect=');
  console.log(result);
  return result;
};

const myproxy = proxy(filter, { target: "http://tripescorestapi.herokuapp.com", changeOrigin: true });

module.exports = app => {
  app.use(myproxy);
};