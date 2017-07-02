'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/wechat', 'wechat.index');
  app.post('/wechat', 'wechat.index');
};
