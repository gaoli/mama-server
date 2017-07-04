'use strict';

module.exports = app => {
  const { AV } = app;

  class Food extends app.Service {
    async find(name) {
      const query = new AV.Query('Food');

      let foods = [];

      foods = await query.contains('name', name).find();

      return foods;
    }
  }

  return Food;
};
