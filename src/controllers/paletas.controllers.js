const paletasService = require("../service/paletas.services")


function initialController (req, res) {
    console.log(req.headers);
    res.send(paletasService.inititalService());
    
}

module.exports = {
    initialController,
}
