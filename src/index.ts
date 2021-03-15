import express from 'express';

import { parseSubmitMessageRequest } from './helper';

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
  const parsedMessage = parseSubmitMessageRequest(request);

  if (parsedMessage) {
    messages.push(parsedMessage); // TODO check if valid
    response.status(200).send('Thanks for your message!');
  } else {
    response.status(400).send('Could not parse request. Please submit messages in the form { message: <non-empty-message-here> }');
  }
});

// TODO write tradeoffs
