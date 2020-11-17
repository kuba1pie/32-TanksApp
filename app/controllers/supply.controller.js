const Supply = require("../models/supply.model.js");

// Create and Save a new Supply
exports.create = (req, res) => {
  // Validate request
  console.log('body:' + req.body)
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Supply
  const supply = new Supply({
    status: req.body.status,

  });

  // Save Supply in the database
  Supply.create(supply, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Supply."
      });
    else res.send(data);
  });
};

// Retrieve all Supplys from the database.
exports.findAll = (req, res) => {
  Supply.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving customers."
      });
    else res.send(data);
  });
};

// Retrieve all Supply Meals by date from the database.
exports.meals = (req, res) => {
  Supply.meals(req, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not meals for supply ${req.params.supplyId} and date ${req.params.date} .`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Meals for Supply " + req.params.supplyId
        });
      }
    } else res.send(data);
  });
};

// Find a single Customer with a customerId
exports.findById = (req, res) => {
  Supply.findById(req.params.supplyId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Supply with id ${req.params.supplyId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Supply with id " + req.params.supplyId
        });
      }
    } else res.send(data);
  });
};


// Delete a Supply with the specified supplyId in the request
exports.delete = (req, res) => {
  Supply.remove(req.params.supplyId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Supply with id ${req.params.supplyId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Supply with id " + req.params.supplyId
        });
      }
    } else res.send({
      message: `Supply was deleted successfully!`
    });
  });
};


// Update a Supply identified by the supplyId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Supply.updateById(
    req.params.supplyId,
    new Supply(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Supply with id ${req.params.supplyId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Supply with id " + req.params.supplyId
          });
        }
      } else res.send(data);
    }
  );
};