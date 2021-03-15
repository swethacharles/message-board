import express from 'express';

import { parseSubmitMessageRequest } from './helper';

const app = express();
const PORT = 3000;

app.use(express.json());

const messages: string[] = [];

app.get('/getMessages', (_, response) => {
  response.send(JSON.stringify({ messages }));
});

app.post('/submitMessage', (request, response) => {
  const parsedMessage = parseSubmitMessageRequest(request);

  if (parsedMessage) {
    messages.push(parsedMessage);
    response.status(200).send('Thanks for your message!');
  } else {
    response.status(400).send('Could not parse request. Please submit messages in the form { message: <non-empty-message-here> }');
  }
});

app.listen(PORT, () => {
  console.log(`Started app - listening at localhost:${PORT}`);
});
