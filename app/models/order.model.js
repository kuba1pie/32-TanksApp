const sql = require("./db.js");

// constructor
const Order = function (order) {
  this.name = order.name;
  this.status = order.status;
  this.city = order.city;
  this.ClientID = order.ClientID;
  this.adress = order.adress;
  this.contactPerson = order.person;
  this.orderNO = order.number;
  this.email = order.email
};

Order.create = (newOrder, result) => {
  sql.query("INSERT INTO orders SET ?", newOrder, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created order: ", {
      id: res.insertId,
      ...newOrder
    });
    result(null, {
      id: res.insertId,
      ...newOrder
    });
  });
};

Order.findById = (orderId, result) => {
  //sql.query(`SELECT * FROM orders WHERE orderId = ${orderId}`, (err, res) => {
  sql.query(`SELECT * FROM orders WHERE orderId = ${orderId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found order: ", res);
      result(null, res);
      return;
    }

    result({
      kind: "not_found"
    }, null);
  });
};
Order.tanks = (req, result) => {
  sql.query(`SELECT * FROM tanks WHERE orderId = ${req.params.orderId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found order: ", res);
      result(null, res);
      return;
    }

    result({
      kind: "not_found"
    }, null);
  });
};
Order.getAll = result => {
  sql.query("SELECT * FROM orders", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

Order.remove = (id, result) => {
  sql.query("DELETE FROM orders WHERE orderId = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Order with the id
      result({
        kind: "not_found"
      }, null);
      return;
    }

    console.log("deleted order with orderId: ", id);
    result(null, res);
  });
};

Order.updateById = (orderId, order, result) => {
  sql.query(
    "UPDATE orders SET status = ? WHERE orderId = ?",
    [order.status, orderId],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Order with the id
        result({
          kind: "not_found"
        }, null);
        return;
      }

      console.log("updated order: ", {
        orderId: orderId,
        ...order
      });
      result(null, {
        orderId: orderId,
        ...order
      });
    }
  );
};

module.exports = Order;