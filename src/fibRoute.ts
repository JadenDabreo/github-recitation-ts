// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";
import * as express from 'express';
import {Request, Response} from 'express';

export default (req: Request, res: Response) => {
  const num: number = parseInt(req.params);

  const fibN: number = fibonacci(num);
  let result: string = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
