const proxy = require("http-proxy-middleware");

const filter = (pathname, req) => {
  console.log('===filter===');
  console.log(pathname);
  const result= pathname.match('^/api');
  console.log('redirect=');
  console.log(result);
};

const myproxy = proxy(filter, { target: "https://tripescorestapi.herokuapp.com" });

module.exports = app => {
  app.use(myproxy);
};