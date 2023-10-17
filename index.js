// import the server package
const bananas = require('express');
// make an instance of the server that we  can customise and run
const app = bananas();

// this is an instance of the server aswell
// const express = require('express')();

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 3000;

// GET localhost:3000/
// app.get(route path, callback function)
app.get("/", (request, response) => {
    // send a response back to the client
    response.send("Hello World, this server is bananas!");
});

const someImportedRouterYay = require('./controllers/PokemonController.js');
app.use("/pokemon", someImportedRouterYay);



// configure the server -- happens all above this line ^^^

// activate the server -- happens all below this line vvv

app.listen(PORT, HOST, () => {
    console.log("Server is running on port: " + PORT);
});