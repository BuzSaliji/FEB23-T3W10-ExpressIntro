// import the server package
const bananas = require('express');

// make an instance of the server that we  can customise and run
const app = bananas();

// this is an instance of the server aswell
// const express = require('express')();

// GET localhost:3000/
// app.get(route path, callback function)
app.get("/", (request, response) => {
    // send a response back to the client
    response.send("Hello World, this server is bananas!");
});

// configure the server -- happens all above this line ^^^

// activate the server -- happens all below this line vvv

app.listen(3000, () => {
    console.log("Server is running on port: " + 3000);

    
});