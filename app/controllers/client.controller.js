const Client = require("../models/client.model.js");

// Create and Save a new Client
exports.create = (req, res) => {
  // Validate request
  console.log('body:' + req.body)
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Client
  const client = new Client({
    name: req.body.name,
    city: req.body.city,
    adress: req.body.adress,
    person: req.body.person,
    number: req.body.number,
    email: req.body.email,
  });

  // Save Client in the database
  Client.create(client, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Client."
      });
    else res.send(data);
  });
};

// Retrieve all Clients from the database.
exports.findAll = (req, res) => {
  Client.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving customers."
      });
    else res.send(data);
  });
};
// Retrieve all Tanks from Order by OrdeID.
exports.orders = (req, res) => {
  Client.orders(req, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not tanks for order ${req.params.clientId} .`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Orders for client " + req.params.clientId
        });
      }
    } else res.send(data);
  });
};

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
  Client.findById(req.params.clientId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Client with id ${req.params.clientId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Client with id " + req.params.clientId
        });
      }
    } else res.send(data);
  });
};


// Delete a Client with the specified clientId in the request
exports.delete = (req, res) => {
  Client.remove(req.params.clientId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Client with id ${req.params.clientId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Client with id " + req.params.clientId
        });
      }
    } else res.send({
      message: `Client was deleted successfully!`
    });
  });
};


// Update a Client identified by the clientId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  //console.log(req.body);

  Client.updateById(
    req.params.clientId,
    new Client(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Client with id ${req.params.clientId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Client with id " + req.params.clientId
          });
        }
      } else res.send(data);
    }
  );
};