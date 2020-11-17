module.exports = (app) => {
  const users = require("../controllers/user.controller.js");
  const clients = require("../controllers/client.controller.js");
  const orders = require("../controllers/order.controller.js");
  const tanks = require("../controllers/tank.controller.js");
  const store = require("../controllers/store.controller.js");
  const materials = require("../controllers/material.controller.js");
  const supplies = require("../controllers/supply.controller.js");

  // Create a new Item
  app.post("/clients", clients.create);
  app.post("/materials", materials.create);
  app.post("/orders", orders.create);
  app.post("/tanks", tanks.create);

  // Retrieve all Items
  app.get("/users", users.findAll);
  app.get("/clients", clients.findAll);
  app.get("/orders", orders.findAll);
  app.get("/tanks", tanks.findAll);
  app.get("/materials", materials.findAll);
  app.get("/supplies", supplies.findAll);
  app.get("/store", store.findAll);

  // Retrieve a single Item with ItemId
  app.get("/users/:userId", users.findOne);
  app.get("/tanks/:tankId", tanks.findOne);
  app.get("/orders/:orderId", orders.findById);
  app.get("/supplies/:supplyId", supplies.findById);
  app.put("/tanks/:tankId", tanks.update);
  app.put("/orders/:orderId", orders.update);
  app.put("/supplies/:supplyId", supplies.update);
  
  
  app.get("/order/tanks/:orderId", orders.tanks);
  app.get("/tanks/materials/:TankID", tanks.materials);
  app.get("/client/orders/:clientId", clients.orders);
  app.get("/client/:clientId", clients.findOne);

  // Retrieve User Meals with userId and date
  app.get("/users/:userId/meals/:date", users.meals);

  // Update a Item with ItemId
  app.put("/users/:userId", users.update);

  // Delete a Item with ItemId
  app.delete("/users/:userId", users.delete);

  // Delete all Items
  //app.delete("/customers", customers.deleteAll);
};
