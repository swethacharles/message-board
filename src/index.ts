import express from "express";

const app = express();
const PORT = 3000;


app.get('/getMessages', (_, response) => {
    // TODO add message variable
    response.send('somebody to lean on - bill withers');
});


app.listen(PORT, () => {
    console.log(`Started app - listening at ${PORT}`)
});


// TODO create method to post message


// TODO write tradeoffs