const sql = require("./db.js");

// constructor
const Material = function (material) {
  this.name = material.name;
  this.TankID = material.TankID;
  this.quantity = material.quantity;
  this.partnumber = material.partnumber;
};

Material.create = (newMaterial, result) => {
  sql.query("INSERT INTO materials SET ?", newMaterial, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created material: ", {
      id: res.insertId,
      ...newMaterial
    });
    result(null, {
      id: res.insertId,
      ...newMaterial
    });
  });
};

Material.findById = (materialId, result) => {
  //sql.query(`SELECT * FROM materials WHERE materialId = ${materialId}`, (err, res) => {
  sql.query(`SELECT name, lastname, DATE_FORMAT(birth, '%Y-%m-%d') AS birth, weight, height, gender, email, activity, age FROM materials WHERE materialId = ${materialId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found material: ", res);
      result(null, res);
      return;
    }

    result({
      kind: "not_found"
    }, null);
  });
};

Material.getAll = result => {
  sql.query("SELECT * FROM materials", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

Material.meals = (req, result) => {
  console.log(req.params.materialId)
  sql.query(`SELECT meal, portion, name, kcal, protein, carbo, fat FROM meals WHERE materialId = ${req.params.materialId} AND date = "${req.params.date}" ORDER BY meal`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found meals for material: ", res);
      result(null, res);
      return;
    }

    result({
      kind: "not_found"
    }, null);
  });
};


Material.remove = (id, result) => {
  sql.query("DELETE FROM materials WHERE materialId = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Material with the id
      result({
        kind: "not_found"
      }, null);
      return;
    }

    console.log("deleted material with materialId: ", id);
    result(null, res);
  });
};

Material.updateById = (materialId, material, result) => {
  sql.query(
    "UPDATE materials SET email = ?, name = ?, lastname = ?, weight = ?, height = ?, activity = ? WHERE materialId = ?",
    [material.email, material.name, material.lastname, material.weight, material.height, material.activity, materialId],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Material with the id
        result({
          kind: "not_found"
        }, null);
        return;
      }

      console.log("updated material: ", {
        materialId: materialId,
        ...material
      });
      result(null, {
        materialId: materialId,
        ...material
      });
    }
  );
};

module.exports = Material;