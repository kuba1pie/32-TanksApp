const Store = require("../models/store.model.js");

// Create and Save a new Store
exports.create = (req, res) => {
  // Validate request
  console.log('body:' + req.body)
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Store
  const store = new Store({
    name: req.body.name,
    lastname: req.body.lastname,
    birth: req.body.birth,
    weight: req.body.weight,
    height: req.body.height,
    gender: req.body.gender,
    email: req.body.email,
    activity: req.body.activity,
  });

  // Save Store in the database
  Store.create(store, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Store."
      });
    else res.send(data);
  });
};

// Retrieve all Stores from the database.
exports.findAll = (req, res) => {
  Store.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving customers."
      });
    else res.send(data);
  });
};

// Retrieve all Store Meals by date from the database.
exports.meals = (req, res) => {
  Store.meals(req, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not meals for store ${req.params.storeId} and date ${req.params.date} .`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Meals for Store " + req.params.storeId
        });
      }
    } else res.send(data);
  });
};

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
  Store.findById(req.params.storeId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Store with id ${req.params.storeId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Store with id " + req.params.storeId
        });
      }
    } else res.send(data);
  });
};


// Delete a Store with the specified storeId in the request
exports.delete = (req, res) => {
  Store.remove(req.params.storeId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Store with id ${req.params.storeId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Store with id " + req.params.storeId
        });
      }
    } else res.send({
      message: `Store was deleted successfully!`
    });
  });
};


// Update a Store identified by the storeId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  //console.log(req.body);

  Store.updateById(
    req.params.storeId,
    new Store(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Store with id ${req.params.storeId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Store with id " + req.params.storeId
          });
        }
      } else res.send(data);
    }
  );
};