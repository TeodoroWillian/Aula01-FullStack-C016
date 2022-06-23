const express = require('express');
const paletrasController = require("../controllers/paletas.controllers");
const router = express.Router();

router.get('/', paletrasController.initialController);


module.exports = router;
