const orm = require('../config/orm');


const burger = {
  createBurger: val => new Promise((reject, resolve) => {
    orm.create('burger_name', val)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  }),
  allBurgers: () => new Promise((reject, resolve) => {
    orm.read('*')
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  }),
  updateBurger: (val, id) => new Promise((reject, resolve) => {
    orm.update('burger', 'devour', 'burger_id', val, id)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  }),
};

module.exports = burger;
