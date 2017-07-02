'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1498615936810_7853';

  // add your config here
  config.security = {
    csrf: {
      enable: false,
    },
  };

  return config;
};
