'use strict';

module.exports = (options, app) => {
  const { wechat } = app;

  return wechat.middleware(async () => {
    return 'test';
  });
};
