const Tank = require("../models/tank.model.js");

// Create and Save a new Tank
exports.create = (req, res) => {
  // Validate request
  console.log("body:" + req.body);
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Tank
  const tank = new Tank({
    capacity: req.body.capacity,
    type: req.body.type,
    OrderID: req.body.OrderID,
    diameter: req.body.diameter,
    height: req.body.height,
  });

  // Save Tank in the database
  Tank.create(tank, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Tank.",
      });
    else res.send(data);
  });
};

// Retrieve all Tanks from the database.
exports.findAll = (req, res) => {
  Tank.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else res.send(data);
  });
};

// Retrieve all Tank Meals by date from the database.
exports.materials = (req, res) => {
  Tank.materials(req, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not meals for tank ${req.params.TankID}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Meals for Tank " + req.params.TankID,
        });
      }
    } else res.send(data);
  });
};

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
  Tank.findById(req.params.tankId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tank with id ${req.params.tankId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Tank with id " + req.params.tankId,
        });
      }
    } else res.send(data);
  });
};

// Delete a Tank with the specified tankId in the request
exports.delete = (req, res) => {
  Tank.remove(req.params.tankId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tank with id ${req.params.tankId}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Tank with id " + req.params.tankId,
        });
      }
    } else
      res.send({
        message: `Tank was deleted successfully!`,
      });
  });
};

// Update a Tank identified by the tankId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  //console.log(req.body);

  Tank.updateById(req.params.tankId, new Tank(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tank with id ${req.params.tankId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Tank with id " + req.params.tankId,
        });
      }
    } else res.send(data);
  });
};
