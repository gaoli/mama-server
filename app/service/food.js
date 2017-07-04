'use strict';

module.exports = app => {
  const { AV } = app;

  class Food extends app.Service {
    async find(name) {
      let foods = [];

      // 精准匹配
      const query = new AV.Query('Food');

      foods = await query.equalTo('name', name).find();

      // 模糊匹配
      if (!foods.length) {
        const query = new AV.Query('Food');

        foods = await query.contains('name', name).find();
      }

      return foods;
    }
  }

  return Food;
};
