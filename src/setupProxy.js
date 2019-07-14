const proxy = require("http-proxy-middleware");

const filter = (pathname, req) => {
  console.log('===filter===');
  console.log(pathname);
  console.log(req);
  return pathname.match('^/api');
};

const myproxy = proxy(filter, { target: "https://tripescorestapi.herokuapp.com/api/" });

module.exports = app => {
  app.use(myproxy);
};