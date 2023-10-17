const express = require('express');

// create an instance of the Express router

const router = express.Router();

router.get("/", (request, response) => {
    response.json({
        message:"Hello workd from a router!"
    });
});

// create out of CRUD
router.post("/", (request, response) => {
    response.json({
        message:"POST request received!"
    });
});

module.exports = router;

// module.exports = {
//     PokemonRouter: router
// }