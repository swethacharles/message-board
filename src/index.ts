import express from "express";

const app = express();
const PORT = 3000;

const messages: string[] = [];
app.get('/getMessages', (_, response) => {
    // TODO add message variable
    response.send('somebody to lean on - bill withers');
});


app.listen(PORT, () => {
    console.log(`Started app - listening at ${PORT}`)
});


// TODO create method to post message
app.post('/submitMessage', (request, response) => {
    messages.push(request.body); // TODO what if it's empty

    response.status(200).send('Thanks for your message!');
});

// TODO write tradeoffs

