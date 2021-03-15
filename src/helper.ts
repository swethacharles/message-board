import { Request } from 'express';

export const parseSubmitMessageRequest: (request: Request) => string | undefined = request => {
  return request.body?.message;
};
