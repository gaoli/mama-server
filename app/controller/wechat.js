'use strict';

module.exports = app => {
  class WechatController extends app.Controller {
    async index(ctx, next) {
      const { wechat } = app;

      await wechat.middleware(async () => {
        return 'test';
      })(ctx, next);
    }
  }

  return WechatController;
};
