const sql = require("./db.js");

// constructor
const Store = function (store) {
  this.name = store.name;
  this.lastname = store.lastname;
  this.birth = store.birth;
  this.weight = store.weight;
  this.height = store.height;
  this.age = store.age;
  this.bmi = store.bmi;
  this.email = store.email;
  this.gender = store.gender;
  this.activity = store.activity;
};

Store.create = (newStore, result) => {
  sql.query("INSERT INTO stores SET ?", newStore, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created store: ", {
      id: res.insertId,
      ...newStore
    });
    result(null, {
      id: res.insertId,
      ...newStore
    });
  });
};

Store.findById = (storeId, result) => {
  //sql.query(`SELECT * FROM stores WHERE storeId = ${storeId}`, (err, res) => {
  sql.query(`SELECT name, lastname, DATE_FORMAT(birth, '%Y-%m-%d') AS birth, weight, height, gender, email, activity, age FROM stores WHERE storeId = ${storeId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found store: ", res);
      result(null, res);
      return;
    }

    result({
      kind: "not_found"
    }, null);
  });
};

Store.getAll = result => {
  sql.query("SELECT * FROM stores", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

Store.meals = (req, result) => {
  console.log(req.params.storeId)
  sql.query(`SELECT meal, portion, name, kcal, protein, carbo, fat FROM meals WHERE storeId = ${req.params.storeId} AND date = "${req.params.date}" ORDER BY meal`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found meals for store: ", res);
      result(null, res);
      return;
    }

    result({
      kind: "not_found"
    }, null);
  });
};


Store.remove = (id, result) => {
  sql.query("DELETE FROM stores WHERE storeId = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Store with the id
      result({
        kind: "not_found"
      }, null);
      return;
    }

    console.log("deleted store with storeId: ", id);
    result(null, res);
  });
};

Store.updateById = (storeId, store, result) => {
  sql.query(
    "UPDATE stores SET email = ?, name = ?, lastname = ?, weight = ?, height = ?, activity = ? WHERE storeId = ?",
    [store.email, store.name, store.lastname, store.weight, store.height, store.activity, storeId],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Store with the id
        result({
          kind: "not_found"
        }, null);
        return;
      }

      console.log("updated store: ", {
        storeId: storeId,
        ...store
      });
      result(null, {
        storeId: storeId,
        ...store
      });
    }
  );
};

module.exports = Store;