const Order = require("../models/order.model.js");

// Create and Save a new Order
exports.create = (req, res) => {
  // Validate request
  console.log("body:" + req.body);
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Order
  const order = new Order({
    name: req.body.name,
    city: req.body.city,
    ClientID: req.body.ClientID,
    adress: req.body.adress,
    person: req.body.person,
    number: req.body.number,
    email: req.body.email,
  });

  // Save Order in the database
  Order.create(order, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Order.",
      });
    else res.send(data);
  });
};

// Retrieve all Orders from the database.
exports.findAll = (req, res) => {
  Order.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else res.send(data);
  });
};

// Retrieve all Tanks from Order by OrdeID.
exports.tanks = (req, res) => {
  Order.tanks(req, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not tanks for order ${req.params.orderId} and date ${req.params.date} .`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Tanks for Order " + req.params.orderId,
        });
      }
    } else res.send(data);
  });
};

// Find a single Customer with a customerId
exports.findById = (req, res) => {
  Order.findById(req.params.orderId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Order with id ${req.params.orderId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Order with id " + req.params.orderId,
        });
      }
    } else res.send(data);
  });
};

// Delete a Order with the specified orderId in the request
exports.delete = (req, res) => {
  Order.remove(req.params.orderId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Order with id ${req.params.orderId}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Order with id " + req.params.orderId,
        });
      }
    } else
      res.send({
        message: `Order was deleted successfully!`,
      });
  });
};

// Update a Order identified by the orderId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  //console.log(req.body);

  Order.updateById(req.params.orderId, new Order(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Order with id ${req.params.orderId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Order with id " + req.params.orderId,
        });
      }
    } else res.send(data);
  });
};
