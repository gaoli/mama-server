'use strict';

/**
 * wechat default config, will read from ENV as default.
 * @member Config#wechat
 * @property {String} appid - wechat app id
 * @property {String} token - wechat token
 * @property {String} encodingAESKey - wechat encoding AES key
 */
exports.wechat = {
  appid: process.env.WECHAT_APP_ID,
  token: process.env.WECHAT_TOKEN,
  encodingAESKey: process.env.WECHAT_ENCODING_AES_KEY,
};
