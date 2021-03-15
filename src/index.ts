import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

const messages: string[] = [];

app.get('/getMessages', (_, response) => {
  response.send(JSON.stringify({ messages }));
});

app.listen(PORT, () => {
  console.log(`Started app - listening at ${PORT}`);
});

app.post('/submitMessage', (request, response) => {
  messages.push(request.body.message); // TODO check if valid

  response.status(200).send('Thanks for your message!');
  // TODO Error response code
});

// TODO write tradeoffs
