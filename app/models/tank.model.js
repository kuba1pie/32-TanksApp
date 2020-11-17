const sql = require("./db.js");

// constructor
const Tank = function (tank) {
  this.type = tank.type;
  this.OrderID = tank.OrderID;
  this.diameter = tank.diameter;
  this.type = tank.height;
  this.capacity = tank.capacity;
};

Tank.create = (newTank, result) => {
  sql.query("INSERT INTO tanks SET ?", newTank, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created tank: ", {
      id: res.insertId,
      ...newTank
    });
    result(null, {
      id: res.insertId,
      ...newTank
    });
  });
};

Tank.findById = (tankId, result) => {
  //sql.query(`SELECT * FROM tanks WHERE tankId = ${tankId}`, (err, res) => {
  sql.query(`SELECT * FROM tanks WHERE TankID = ${tankId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found tank: ", res);
      result(null, res);
      return;
    }

    result({
      kind: "not_found"
    }, null);
  });
};

Tank.getAll = result => {
  sql.query("SELECT tanks.TankID, tanks.capacity AS TankCapacity, orders.name AS OrderName, orders.city AS OrderCity, clients.name AS ClientName FROM serwer53641_jr.tanks INNER JOIN serwer53641_jr.orders ON tanks.OrderID = orders.OrderID INNER JOIN serwer53641_jr.clients ON clients.ClientID=orders.ClientID ORDER BY tanks.TankID ASC", (err, res) => {
  //sql.query("SELECT tanks.OrderID, orders.ClientID, clients.name AS ClientName, orders.name AS OrderName, GROUP_CONCAT(TankID) AS Tanks FROM serwer53641_jr.tanks INNER JOIN serwer53641_jr.orders ON tanks.OrderID=orders.OrderID INNER JOIN serwer53641_jr.clients ON orders.ClientID=clients.ClientID GROUP BY ClientID", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

Tank.materials = (req, result) => {
  console.log(req.params.TankID)
  sql.query(`SELECT * FROM materials WHERE TankID = ${req.params.TankID}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found meals for tank: ", res);
      result(null, res);
      return;
    }

    result({
      kind: "not_found"
    }, null);
  });
};


Tank.remove = (id, result) => {
  sql.query("DELETE FROM tanks WHERE tankId = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Tank with the id
      result({
        kind: "not_found"
      }, null);
      return;
    }

    console.log("deleted tank with tankId: ", id);
    result(null, res);
  });
};

Tank.updateById = (tankId, tank, result) => {
  sql.query(
    "UPDATE tanks SET capacity =? WHERE tankId = ?",
    [tank.capacity, tankId],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Tank with the id
        result({
          kind: "not_found"
        }, null);
        return;
      }

      console.log("updated tank: ", {
        tankId: tankId,
        ...tank
      });
      result(null, {
        tankId: tankId,
        ...tank
      });
    }
  );
};

module.exports = Tank;