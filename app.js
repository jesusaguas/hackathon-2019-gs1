const express = require("express");
const samHandler = require("./sam.js");
const jesusHandler = require("./jesus.js");
const nayanHandler = require("./nayan.js");
const app = express();
const port = process.env.PORT_NUMBER || 8080; // get port

// Register separate handlers for each endpoint
// Handlers must return in the following format:
/* {
    succ = true | false,
    content = // content to print, needed only for successful op
    message = // message describing error, not needed for successful op
}
*/

// Let's log the original URL requested
app.use((req, res, next) => {
    console.log(req.originalUrl);
    next(); // continue
});

// Example response:
app.get("/", (req, res) => {
    toSend = {
        succ: false,
        content: {},
        message: "Invalid endpoint."
    }

    res.send(toSend)
})

app.get("/sam", samHandler);
app.get("/jesus", jesusHandler);
app.get("/nayan", nayanHandler);

app.listen(port, () => console.log(`Now listening on localhost:${port}!`))