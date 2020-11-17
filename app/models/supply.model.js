const sql = require("./db.js");

// constructor
const Supply = function (supply) {
  this.status = supply.status;
};

Supply.create = (newSupply, result) => {
  sql.query("INSERT INTO supplies SET ?", newSupply, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created supply: ", {
      id: res.insertId,
      ...newSupply
    });
    result(null, {
      id: res.insertId,
      ...newSupply
    });
  });
};

Supply.findById = (supplyId, result) => {
  //sql.query(`SELECT * FROM supplys WHERE supplyId = ${supplyId}`, (err, res) => {
  sql.query(`SELECT * FROM supplies WHERE supplyId = ${supplyId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found supply: ", res);
      result(null, res);
      return;
    }

    result({
      kind: "not_found"
    }, null);
  });
};

Supply.getAll = result => {
  sql.query("SELECT * FROM supplies", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

Supply.meals = (req, result) => {
  console.log(req.params.supplyId)
  sql.query(`SELECT meal, portion, name, kcal, protein, carbo, fat FROM meals WHERE supplyId = ${req.params.supplyId} AND date = "${req.params.date}" ORDER BY meal`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found meals for supply: ", res);
      result(null, res);
      return;
    }

    result({
      kind: "not_found"
    }, null);
  });
};


Supply.remove = (id, result) => {
  sql.query("DELETE FROM supplys WHERE supplyId = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Supply with the id
      result({
        kind: "not_found"
      }, null);
      return;
    }

    console.log("deleted supply with supplyId: ", id);
    result(null, res);
  });
};

Supply.updateById = (supplyId, supply, result) => {
  sql.query(
    "UPDATE supplies SET status =? WHERE SupplyID = ?",
    [supply.status, supplyId],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Supply with the id
        result({
          kind: "not_found"
        }, null);
        return;
      }

      console.log("updated supply: ", {
        supplyId: supplyId,
        ...supply
      });
      result(null, {
        supplyId: supplyId,
        ...supply
      });
    }
  );
};

module.exports = Supply;