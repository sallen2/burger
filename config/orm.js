const con = require('../config/connection');

const orm = {
  create: (name, val) => new Promise((reject, resolve) => {
    con.query(
      'INSERT INTO burger SET ?',
      {
        [name]: val,
        devour: false,
      },
      (err, resp) => {
        if (err) reject(err);
        resolve('Created!');
      },
    );
  }),
  read: val => new Promise((reject, resolve) => {
    con.query(`SELECT ${val} FROM burger`, (err, resp) => {
      if (err) reject(err);
      resolve(resp);
    });
  }),
  update: (table, colName, idName, val, val2) => new Promise((reject, resolve) => {
    con.query(
      `UPDATE ${table} SET ${colName}= ${val} WHERE ?`, {
        [idName]: val2,
      },
      (err, resp) => {
        if (err) reject(err);
        resolve('Updated!');
      },
    );
  }),
  delete: (val, table) => new Promise((reject, resolve) => {
    con.query(
      `DELETE FROM ${table} WHERE burger_name = ${val}`,
      (err, res) => {
        if (err) reject(err);
        resolve('Deleted!');
      },
    );
  }),
};

module.exports = orm;
