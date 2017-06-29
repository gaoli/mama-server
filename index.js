'use strict';

// adjust egg env by LeanCloud env
if (!process.env.EGG_SERVER_ENV) {
  switch (process.env.LEANCLOUD_APP_ENV) {
    case 'production' :
      process.env.EGG_SERVER_ENV = 'prod';
      break;
    case 'stage':
      process.env.EGG_SERVER_ENV = 'stage';
      break;
    default:
      break;
  }
}

// start app
require('egg').startCluster({
  baseDir: __dirname,
  workers: process.env.LEANCLOUD_AVAILABLE_CPUS,
  port: process.env.LEANCLOUD_APP_PORT || process.env.PORT || 7001,
});
