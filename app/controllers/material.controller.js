const Material = require("../models/material.model.js");

// Create and Save a new Material
exports.create = (req, res) => {
  // Validate request
  console.log('body:' + req.body)
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Material
  const material = new Material({
    name: req.body.name,
    TankID: req.body.TankID,
    quantity: req.body.quantity,
    partnumber: req.body.partnumber,
  });

  // Save Material in the database
  Material.create(material, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Material."
      });
    else res.send(data);
  });
};

// Retrieve all Materials from the database.
exports.findAll = (req, res) => {
  Material.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving customers."
      });
    else res.send(data);
  });
};

// Retrieve all Material Meals by date from the database.
exports.meals = (req, res) => {
  Material.meals(req, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not meals for material ${req.params.materialId} and date ${req.params.date} .`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Meals for Material " + req.params.materialId
        });
      }
    } else res.send(data);
  });
};

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
  Material.findById(req.params.materialId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Material with id ${req.params.materialId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Material with id " + req.params.materialId
        });
      }
    } else res.send(data);
  });
};


// Delete a Material with the specified materialId in the request
exports.delete = (req, res) => {
  Material.remove(req.params.materialId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Material with id ${req.params.materialId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Material with id " + req.params.materialId
        });
      }
    } else res.send({
      message: `Material was deleted successfully!`
    });
  });
};


// Update a Material identified by the materialId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  //console.log(req.body);

  Material.updateById(
    req.params.materialId,
    new Material(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Material with id ${req.params.materialId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Material with id " + req.params.materialId
          });
        }
      } else res.send(data);
    }
  );
};