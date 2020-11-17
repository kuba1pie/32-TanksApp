const sql = require("./db.js");

// constructor
const Client = function (client) {
  this.name = client.name;
  this.city = client.city;
  this.adress = client.adress;
  this.person = client.person;
  this.email = client.email;
  this.number = client.number;
};

Client.create = (newClient, result) => {
  console.log(newClient)
  sql.query("INSERT INTO clients SET ?", newClient, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created client: ", {
      id: res.insertId,
      ...newClient
    });
    result(null, {
      id: res.insertId,
      ...newClient
    });
  });
};
Client.orders = (req, result) => {
  sql.query(`SELECT * FROM orders WHERE clientId = ${req.params.clientId}`, (err, res) => {
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
Client.findById = (clientId, result) => {
  //sql.query(`SELECT * FROM clients WHERE clientId = ${clientId}`, (err, res) => {
  sql.query(`SELECT * FROM clients WHERE ClientId = ${clientId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found client: ", res);
      result(null, res);
      return;
    }

    result({
      kind: "not_found"
    }, null);
  });
};

Client.getAll = result => {
  sql.query("SELECT * FROM clients", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

Client.remove = (id, result) => {
  sql.query("DELETE FROM clients WHERE clientId = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Client with the id
      result({
        kind: "not_found"
      }, null);
      return;
    }

    console.log("deleted client with clientId: ", id);
    result(null, res);
  });
};

Client.updateById = (clientId, client, result) => {
  sql.query(
    "UPDATE clients SET email = ?, name = ?, lastname = ?, weight = ?, height = ?, activity = ? WHERE clientId = ?",
    [client.email, client.name, client.lastname, client.weight, client.height, client.activity, clientId],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Client with the id
        result({
          kind: "not_found"
        }, null);
        return;
      }

      console.log("updated client: ", {
        clientId: clientId,
        ...client
      });
      result(null, {
        clientId: clientId,
        ...client
      });
    }
  );
};

module.exports = Client;