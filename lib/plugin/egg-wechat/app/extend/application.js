'use strict';

const WECHAT = Symbol('app#wechat');
const wechat = require('co-wechat');

module.exports = {
  /**
   * wechat
   * @member {Object} Application#wechat
   */
  get wechat() {
    if (!this[WECHAT]) {
      this[WECHAT] = wechat(this.config.wechat);
    }

    return this[WECHAT];
  },
};
