'use strict';

const path = require('path');

module.exports = {
  leancloud: {
    enable: true,
    package: 'egg-leancloud',
  },
  wechat: {
    enable: true,
    path: path.join(__dirname, '../lib/plugin/egg-wechat'),
  },
};
