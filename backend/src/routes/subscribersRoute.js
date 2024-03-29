const express = require("express");
const {
  createSubs,
  getAllSubs,
  nameOfSubs,
  getSingleSub,
  homePage,
} = require("../controller/SubscriberControler");

// this are all the routers to get data fro api
const router = express.Router();

// route to create a subscriber
router.route("/createSubs").post(createSubs);

// route to view all subscriber
router.route("/subscribers").get(getAllSubs);

// route to view subscriber by name
router.route("/subscribers/name").get(nameOfSubs);

// route to view suscriber by id
router.route("/sub/:id").get(getSingleSub);

module.exports = router;
