const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/getExample', //proxy가 필요한 path prameter를 입력합니다.
    createProxyMiddleware({
      target: 'http://localhost:3002', //타겟이 되는 api url를 입력합니다.
      changeOrigin: true, //대상 서버 구성에 따라 호스트 헤더가 변경되도록 설정하는 부분입니다.
    })
  );
};

module.exports = function (app) {
  app.use(
    '/QueryPartial', //proxy가 필요한 path prameter를 입력합니다.
    createProxyMiddleware({
      target: 'http://localhost:9090', //타겟이 되는 api url를 입력합니다.
      changeOrigin: true, //대상 서버 구성에 따라 호스트 헤더가 변경되도록 설정하는 부분입니다.
    })
  );
};

module.exports = function (app) {
  app.use(
    '/withDrawn', //proxy가 필요한 path prameter를 입력합니다.
    createProxyMiddleware({
      target: 'http://localhost:9090', //타겟이 되는 api url를 입력합니다.
      changeOrigin: true, //대상 서버 구성에 따라 호스트 헤더가 변경되도록 설정하는 부분입니다.
    })
  );
};

module.exports = function (app) {
  app.use(
    '/Accept', //proxy가 필요한 path prameter를 입력합니다.
    createProxyMiddleware({
      target: 'http://localhost:9090', //타겟이 되는 api url를 입력합니다.
      changeOrigin: true, //대상 서버 구성에 따라 호스트 헤더가 변경되도록 설정하는 부분입니다.
    })
  );
};

module.exports = function (app) {
  app.use(
    '/Reject', //proxy가 필요한 path prameter를 입력합니다.
    createProxyMiddleware({
      target: 'http://localhost:9090', //타겟이 되는 api url를 입력합니다.
      changeOrigin: true, //대상 서버 구성에 따라 호스트 헤더가 변경되도록 설정하는 부분입니다.
    })
  );
};

module.exports = function (app) {
  app.use(
    '/Expire', //proxy가 필요한 path prameter를 입력합니다.
    createProxyMiddleware({
      target: 'http://localhost:9090', //타겟이 되는 api url를 입력합니다.
      changeOrigin: true, //대상 서버 구성에 따라 호스트 헤더가 변경되도록 설정하는 부분입니다.
    })
  );
};