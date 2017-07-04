'use strict';

const ZH_CN = {
  no: '不能吃',
  warn: '慎吃',
  ok: '能吃',
};

module.exports = app => {
  class WechatController extends app.Controller {
    async index(ctx, next) {
      const { wechat } = app;
      const { food } = ctx.service;

      await wechat.middleware(async message => {
        const { MsgType: type, Content: name } = message;

        if (type !== 'text' || name.trim() === '') {
          return '请输入正确的食物名称';
        }

        const foods = await food.find(name);

        // 匹配到多种食物
        if (foods.length > 1) {
          const names = foods.map(food => food.get('name'));

          return `你是不是要找：\n${names.join('\n')}`;

        // 匹配到一种食物
        } else if (foods.length === 1) {
          const food = foods[0];
          const data = [{
            crowd: '孕妇',
            result: food.get('pregnant'),
            reason: food.get('pregnantReason').join('\n\n'),
          }, {
            crowd: '产妇',
            result: food.get('puerpera'),
            reason: food.get('puerperaReason').join('\n\n'),
          }, {
            crowd: '婴儿',
            result: food.get('baby'),
            reason: food.get('babyReason').join('\n\n'),
          }];

          let text = '';

          data.forEach(item => {
            const { crowd, result, reason } = item;

            text += `${crowd}：${ZH_CN[result]}\n\n${reason}\n\n`;
          });

          return text;
        }

        // 未匹配任何食物
        return '未查询到相应食物信息';
      })(ctx, next);
    }
  }

  return WechatController;
};
